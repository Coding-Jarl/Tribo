import { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "@components/Gallery";

export default function Home() {
  const [games, setGames] = useState([]);
  const [needle, setNeedle] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.boardgameatlas.com/api/search?name=${needle}&pretty=true&client_id=${
          import.meta.env.VITE_API_ATLAS_KEY
        }`
      )
      .then(({ data }) => {
        setGames(data.games);
      });
  }, [needle]);

  const hChangeNeedle = (evt) => {
    setNeedle(evt.target.value);
  };

  return (
    <>
      <aside>
        <input
          type="search"
          name="needle"
          value={needle}
          onChange={hChangeNeedle}
        />
      </aside>
      <Gallery elements={games} />
    </>
  );
}
