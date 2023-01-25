import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useApi from "@services/useApi";
import Styled from "./style";

export default function Header() {
  const [results, setResults] = useState([]);
  const [needle, setNeedle] = useState("");
  const api = useApi();

  const hChange = (evt) => {
    setNeedle(evt.target.value);
  };

  useEffect(() => {
    api.get(`/search?needle=${needle}`).then(({ data }) => {
      setResults(data.filter((elt, id) => id < 5)); // ?!
    });
  }, [needle]);

  return (
    <Styled>
      <p className="siteTitle">Tribo!</p>
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
    </Styled>
  );
}
