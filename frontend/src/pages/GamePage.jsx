import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GameCard from "@components/GameCard";

export default function GamePage() {
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.boardgameatlas.com/api/search?ids=${id}&pretty=true&client_id=JLBr5npPhV`
      )
      .then(({ data }) => {
        setGame(data.games[0]);
      });
  }, []);

  return (
    <>
      <h1>Welcome on my new page !</h1>
      <p>You're on game {game.name}</p>
      {game.id && <GameCard data={game} />}
    </>
  );
}
