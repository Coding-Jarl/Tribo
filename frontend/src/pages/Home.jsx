import { useState, useEffect } from "react";
import useApi from "@services/useApi";
import Gallery from "@components/Gallery";

export default function Home() {
  const [games, setGames] = useState([]);
  const api = useApi();

  useEffect(() => {
    api.get(`/boardgames`).then(({ data }) => {
      setGames(data);
    });
  }, []);

  return <Gallery elements={games} />;
}
