import GameCard from "@components/GameCard";
import PropTypes from "prop-types";
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
          <li>
            <GameCard data={game} />
          </li>
        );
      })}
    </Styled>
  );
}
Gallery.propTypes = {
  elements: PropTypes.arrayOf().isRequired,
};
