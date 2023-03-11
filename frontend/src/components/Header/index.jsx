import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GiHobbitDoor } from "react-icons/gi";
import useApi from "@services/useApi";
import FormAuth from "@components/FormAuth";
import Styled from "./style";

export default function Header() {
  const [results, setResults] = useState([]);
  const api = useApi();
  const { user } = useSelector((store) => store);
  const { needle } = useSelector((store) => store);
  const dispatch = useDispatch();

  const hLogout = () => {
    dispatch({ type: "USER_LOGOUT" });
    dispatch({ type: "MODAL_CLOSE" });
  };

  const hChange = (evt) => {
    dispatch({
      type: "NEEDLE_UPDATE",
      payload: evt.target.value,
    });
  };

  const open = () => {
    let content;
    if (user.id) {
      content = (
        <button type="button" onClick={hLogout}>
          Log out
        </button>
      );
    } else {
      content = <FormAuth />;
    }
    dispatch({ type: "MODAL_OPEN", payload: content });
  };

  useEffect(() => {
    api.get(`/search?needle=${needle}`).then(({ data }) => {
      setResults(data.filter((elt, id) => id < 5)); // ?!
    });
  }, [needle]);

  return (
    <Styled>
      <p className="siteTitle">
        <Link to="/">Tribo!</Link>
      </p>
      <div className="searchbar">
        <input
          value={needle}
          type="search"
          placeholder="Azul, ValhallaCode, ..."
          onChange={hChange}
          className={needle && "open"}
        />
        {needle && (
          <ul>
            {results.map((result) => (
              <li key={`/${result.entityType}/${result.id}`}>
                <Link to={`/${result.entityType}/${result.id}`}>
                  <img src={result.thumb || ""} alt={result.label} />
                  <p>{result.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button type="button" onClick={open}>
        {!user?.id && <GiHobbitDoor color="white" />}
        {user?.avatarUrl && (
          <img src={user.avatarUrl} alt={`${user.pseudo}&apos;s avatar`} />
        )}
        {user?.id && !user?.avatarUrl && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png"
            alt={`${user.pseudo}&apos;s avatar`}
          />
        )}
      </button>
    </Styled>
  );
}
