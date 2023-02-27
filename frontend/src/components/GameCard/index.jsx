import { useState } from "react";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { GiBabyFace, GiEmptyHourglass } from "react-icons/gi";
import { BsPeopleFill, BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import Styled from "./style";

export default function GameCard({ data }) {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const hActivate = () => {
    setActive(true);
  };
  const hDesactivate = () => {
    setActive(false);
  };
  const hClickDetail = () => {
    navigate(`/boardgames/${data.id}`);
  };

  return (
    <Styled thumbUrl={data.imgUrl} className={active ? "active" : ""}>
      <aside onPointerEnter={hActivate}>
        <h2>{data.name}</h2>
      </aside>
      <main onPointerLeave={hDesactivate}>
        <div className="picture" />
        <div className="cartouche">
          <div className="actions">
            <ul>
              <li>
                <button type="button" onClick={hClickDetail}>
                  <BiDetail />
                </button>
              </li>
            </ul>
          </div>
          <h2>{data.name}</h2>
          <ul className="desc">
            <li>{data.description.replace(/(<([^>]+)>)/gi, "")}</li>
          </ul>
          <ul className="stats">
            <li>
              <BsPeopleFill />
              {data.minPlayers}-{data.maxPlayers}
            </li>
            <li>
              <GiEmptyHourglass />
              {data.minDuration}-{data.maxDuration}
            </li>
            <li>
              <GiBabyFace />
              {data.minAge}
            </li>
            <li>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
            </li>
          </ul>
        </div>
      </main>
    </Styled>
  );
}

GameCard.propTypes = {
  data: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    description: propTypes.string,
    imgUrl: propTypes.string,
    minPlayers: propTypes.number,
    maxPlayers: propTypes.number,
    minDuration: propTypes.number,
    maxDuration: propTypes.number,
    minAge: propTypes.number,
  }).isRequired,
};
