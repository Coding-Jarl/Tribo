import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";
import { GiBabyFace, GiEmptyHourglass } from "react-icons/gi";
import { BsPeopleFill, BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import Styled from "./style";

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
    <Styled thumbUrl={game?.images?.large}>
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
                <p>{game.description_preview}</p>
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
                {game.publishers.map((publisher) => publisher.id)}
                <h2>Createurs</h2>
                {game.designers.map((designer) => designer.id)}
                <h2>Developpeurs</h2>
                {game.publishers.map((developer) => developer.id)}
                <h2>Artistes</h2>
                {game.artists.join(", ")}
              </TabPanel>
              <TabPanel>
                <h2>Où acheter</h2>
                {game.sku_objects.map((sku) => sku.name)}
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
                {game.min_players}-{game.max_players}
              </li>
              <li>
                <GiEmptyHourglass />
                {game.min_playtime}-{game.max_playtime}
              </li>
              <li>
                <GiBabyFace />
                {game.min_age}
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
