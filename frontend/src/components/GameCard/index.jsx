import { useState } from "react";
import propTypes from "prop-types";
import Styled from "./style";

export default function GameCard({ data }) {
  const [active, setActive] = useState(false);

  const hActivate = () => {
    setActive(true);
  };
  const hDesactivate = () => {
    setActive(false);
  };

  return (
    <Styled rawData={data} className={active ? "active" : ""}>
      <aside onPointerEnter={hActivate}>
        <h2>{data.name}</h2>
      </aside>
      <main onPointerLeave={hDesactivate}>{data.name} est bien cachée !</main>
    </Styled>
  );
}

GameCard.propTypes = {
  data: propTypes.shape({
    name: propTypes.string,
    thumb: propTypes.string,
  }).isRequired,
};

//  https://api.boardgameatlas.com/api/game/images?limit=20&game_id=&client_id=ptNNRPZ1cu
