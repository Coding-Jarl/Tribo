import { useState } from "react";
import propTypes from "prop-types";
import GameCard from "@components/GameCard";
import Styled from "./style";

export default function Gallery({ elements }) {
  const [filter, setFilter] = useState("");

  const hChangeFilter = (evt) => {
    setFilter(evt.target.value);
  };

  return (
    <Styled>
      <li className="filter">
        <p>Filtrer cette liste:</p>
        <input
          type="search"
          name="needle"
          value={filter}
          onChange={hChangeFilter}
        />
      </li>
      {elements
        .filter((game) =>
          game.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((game) => {
          return (
            <li key={game.id}>
              <GameCard data={game} />
            </li>
          );
        })}
    </Styled>
  );
}
Gallery.propTypes = {
  elements: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      description: propTypes.string,
      imgUrl: propTypes.string,
      minPlayers: propTypes.number,
      maxPlayers: propTypes.number,
      minDuration: propTypes.number,
      maxDuration: propTypes.number,
      minAge: propTypes.number,
    })
  ).isRequired,
};
