import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Styled from "./style";

export default function Header() {
  const [results, setResults] = useState([]);
  const [needle, setNeedle] = useState("");

  const hChange = (evt) => {
    setNeedle(evt.target.value);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/search?needle=${needle}`)
      .then(({ data }) => {
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
        />
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
      </div>
    </Styled>
  );
}
