import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import "./sandboxStyle.css";
import Select from "react-select";
import useApi from "@services/useApi";

export default function SandBox() {
  const [friends, setFriends] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [availableGames, setAvailableGames] = useState([]);
  const [selectedGames, setSelectedGames] = useState([]);
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("");

  const api = useApi();

  const fetchFriends = () => {
    api.get("/friends").then(({ data }) => {
      setFriends(
        data.map((friend) => {
          return {
            label: friend.pseudo,
            value: friend.id,
          };
        })
      );
    });
  };

  const fetchGames = () => {
    const usersId = selectedFriends.map((user) => user.value).join(",");
    api.get(`/boardgamesPerUser?users=${usersId}`).then(({ data }) => {
      setAvailableGames(
        data.map((game) => {
          return {
            label: game.name,
            value: game.id,
          };
        })
      );
    });
  };

  const hChangeWhere = (evt) => {
    setWhere(evt.target.value);
  };
  const hChangeWhen = (evt) => {
    setWhen(evt.target.value);
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    const formState = {
      when,
      where,
      selectedFriends,
      selectedGames,
    };
    api.post("/events", formState);
  };

  useEffect(fetchFriends, []);

  return (
    <form onSubmit={hSubmit}>
      <input
        type="text"
        placeholder="Où ?"
        value={where}
        onChange={hChangeWhere}
      />
      <input type="datetime-local" value={when} onChange={hChangeWhen} />
      <Select
        options={friends}
        isMulti
        name="friends"
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={(choice) => setSelectedFriends(choice)}
        onBlur={fetchGames}
      />
      <Select
        options={availableGames}
        isMulti
        name="games"
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={(choice) => setSelectedGames(choice)}
      />
      <input type="submit" value="Create an event !" />
    </form>
  );
}
