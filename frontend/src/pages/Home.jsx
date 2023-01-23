import { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "@components/Gallery";

export default function Home() {
  const [games, setGames] = useState([]);
  const [needle, setNeedle] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/boardgames`)
      .then(({ data }) => {
        setGames(data);
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
