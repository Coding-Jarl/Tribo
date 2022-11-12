import GameCard from "@components/GameCard";
import { SandBox, Home } from "@pages";
import { Route, Switch } from "react-router-dom";

const gameData = {
  url: "https://api.geekdo.com/xmlapi2/thing?id=1",
  type: "boardgame",
  id: "1",
  thumb:
    "https://cf.geekdo-images.com/rpwCZAjYLD940NWwP3SRoA__thumb/img/YT6svCVsWqLrDitcMEtyazVktbQ=/fit-in/200x150/filters:strip_icc()/pic4718279.jpg",
  name: "Die Macher",
  description:
    "Die Macher is a game about seven sequential political races in different regions of Germany. Players are in charge of national political parties, and must manage limited resources to help their party to victory. The winning party will have the most victory points after all the regional elections. There are four different ways of scoring victory points. First, each regional election can supply one to eighty victory points, depending on the size of the region and how well your party does in it. Second, if a party wins a regional election and has some media influence in the region, then the party will receive some media-control victory points. Third, each party has a national party membership which will grow as the game progresses and this will supply a fair number of victory points. Lastly, parties score some victory points if their party platform matches the national opinions at the end of the game.&#10;&#10;The 1986 edition featured four parties from the old West Germany and supported 3-4 players. The 1997 edition supports up to five players in the re-united Germany and updated several features of the rules as well.  The 2006 edition also supports up to five players and adds a shorter five-round variant and additional rules updates by the original designer.&#10;&#10;",
  yearPublished: "1986",
  playersMin: "3",
  playersMax: "5",
  timeMin: "240",
  timeMax: "240",
  ageMin: "14",
  categories: ["Economic", "Negotiation", "Political"],
  mechanics: [
    "Alliances",
    "Area Majority / Influence",
    "Auction/Bidding",
    "Dice Rolling",
    "Hand Management",
    "Simultaneous Action Selection",
  ],
  designers: ["Karl-Heinz Schmiel"],
  artists: ["Marcus Gschwendtner", "Harald Lieske"],
  publishers: [
    "Hans im Glück",
    "Moskito Spiele",
    "Ediciones MasQueOca",
    "Portal Games",
    "Spielworxx",
    "sternenschimmermeer",
    "Stronghold Games",
    "Valley Games, Inc.",
    "YOKA Games",
  ],
  expansions: [],
};

export default function App() {
  return (
    <>
      Tribo!
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/lab">
          <SandBox />
        </Route>
      </Switch>
      <GameCard data={gameData} />
    </>
  );
}
