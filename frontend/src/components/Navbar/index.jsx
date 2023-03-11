import Styled from "./style";

export default function Navbar() {
  return (
    <Styled>
      <ul>
        <li>
          <h2>Games</h2>
          <ul>
            <li>New</li>
            <li>Popular</li>
            <li>Search</li>
          </ul>
        </li>
        <li>
          <h2>Users</h2>
          <ul>
            <li>Search</li>
          </ul>
        </li>
        <li>
          <h2>Scenarios</h2>
          <ul>
            <li>New</li>
            <li>Popular</li>
            <li>Search</li>
          </ul>
        </li>
        <li>
          <h2>Events</h2>
          <ul>
            <li>Public</li>
            <li>My Agenda</li>
          </ul>
        </li>
      </ul>
    </Styled>
  );
}
