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
    navigate(`/games/${data.id}`);
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
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              eaque illum veniam dolorem quas mollitia aspernatur
              necessitatibus, nobis impedit temporibus? Sequi doloremque
              eligendi porro molestiae delectus. Nostrum, iusto hic. Quo.
            </li>
          </ul>
          <ul className="stats">
            <li>
              <BsPeopleFill />
              {data.min_players}-{data.max_players}
            </li>
            <li>
              <GiEmptyHourglass />
              {data.min_playtime}-{data.max_playtime}
            </li>
            <li>
              <GiBabyFace />
              {data.min_age}
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
    description_preview: propTypes.string,
    imgUrl: propTypes.string,
    min_players: propTypes.number,
    max_players: propTypes.number,
    min_playtime: propTypes.number,
    max_playtime: propTypes.number,
    min_age: propTypes.number,
  }).isRequired,
};
