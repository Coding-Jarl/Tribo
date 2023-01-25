import GameCard from "@components/GameCard";
import propTypes from "prop-types";
import Styled from "./style";

export default function Gallery({ elements }) {
  return (
    <Styled>
      <li className="filter">
        <p>Filtrer cette liste:</p>
        <input type="text" />
      </li>
      {elements.map((game) => {
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
