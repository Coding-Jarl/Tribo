import GameCard from "@components/GameCard";
import PropTypes from "prop-types";
import Styled from "./style";

export default function Gallery({ elements }) {
  return (
    <Styled>
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
