import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BsPeopleFill, BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { GiBabyFace, GiEmptyHourglass } from "react-icons/gi";
import useApi from "@services/useApi";
import Styled from "./style";

export default function GamePage() {
  const [game, setGame] = useState({});
  const { id } = useParams();
  const api = useApi();

  useEffect(() => {
    api.get(`/boardgames/${id}`).then(({ data }) => {
      setGame(data);
    });
  }, [id]);

  return (
    <Styled thumbUrl={game?.imgUrl}>
      <main>
        {game.name && (
          <>
            <h1>{game.name}</h1>
            <Tabs>
              <TabList className="tabs">
                <Tab>Jeu</Tab>
                <Tab>Matériel</Tab>
                <Tab>Feedback</Tab>
                <Tab>Createurs</Tab>
                <Tab>Où acheter</Tab>
              </TabList>
              <TabPanel>
                <h2>Description</h2>
                <p dangerouslySetInnerHTML={{ __html: game.description }} />
              </TabPanel>
              <TabPanel>
                <h2>Materiel</h2>
                <p>RàS</p>
              </TabPanel>
              <TabPanel>
                <h2>Feedback</h2>
                <p>Coming soon!</p>
              </TabPanel>
              <TabPanel>
                <h2>Editeurs</h2>
                {game.creators.publishers.join(", ")}
                <h2>Designers</h2>
                {game.creators.designers.join(", ")}
                <h2>Developpeurs</h2>
                {game.creators.developers.join(", ")}
                <h2>Artistes</h2>
                {game.creators.artists.join(", ")}
              </TabPanel>
              <TabPanel>
                <h2>Où acheter</h2>
                {/* {game.sku_objects.map((sku) => sku.name)} */}
              </TabPanel>
            </Tabs>
          </>
        )}
      </main>
      <aside>
        {game.name && (
          <>
            <div className="picture" />
            <ul className="stats">
              <li>
                <BsPeopleFill />
                {game.minPlayers}-{game.maxPlayers}
              </li>
              <li>
                <GiEmptyHourglass />
                {game.minDuration}-{game.maxDuration}
              </li>
              <li>
                <GiBabyFace />
                {game.minAge}
              </li>
              <li>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
              </li>
            </ul>
            <h2>Tags</h2>
            <ul>
              {game?.mechanics?.map((mech) => (
                <li>
                  <a href={mech.url}>{mech.id}</a>
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>
    </Styled>
  );
}
