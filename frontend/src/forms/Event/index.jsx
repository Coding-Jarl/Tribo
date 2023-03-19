import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import useApi from "@services/useApi";
import Select from "react-select";
import Styled from "./style";

export default function FormEvent() {
  const [friends, setFriends] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [games, setGames] = useState([]);
  const [selectedGames, setSelectedGames] = useState([]);
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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
      setGames(
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
  const hChangeName = (evt) => {
    setName(evt.target.value);
  };
  const hChangeDescription = (evt) => {
    setDescription(evt.target.value);
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
    <Styled onSubmit={hSubmit}>
      <fieldset>
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={hChangeName}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={hChangeDescription}
        />
      </fieldset>
      <fieldset className="guestsgames">
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
          options={games}
          isMulti
          name="games"
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(choice) => setSelectedGames(choice)}
        />
      </fieldset>
      <fieldset className="spacetime">
        <div>
          <input
            type="text"
            placeholder="Où ?"
            value={where}
            onChange={hChangeWhere}
          />
          <MapContainer
            center={[50.6, 3.0]}
            zoom={13}
            scrollWheelZoom={false}
            className="map"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </div>

        <div>
          <input type="datetime-local" value={when} onChange={hChangeWhen} />
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              {
                title: "event 1",
                start: new Date("2023-03-11T08:00:00"),
                end: new Date("2023-03-11T22:00:00"),

                allDay: true,
                color: "red",
              },
              { title: "event 2", date: "2023-03-15" },
            ]}
          />
        </div>
      </fieldset>
      <input type="submit" value="Create an event !" />
    </Styled>
  );
}
