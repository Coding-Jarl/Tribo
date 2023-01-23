import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { BoardgameList, BoardgameEdit } from "./resources/boardgames";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="boardgames" list={BoardgameList} edit={BoardgameEdit} />
    </Admin>
  );
}

export default App;
