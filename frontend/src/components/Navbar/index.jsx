import Styled from "./style";

export default function Navbar() {
  return (
    <Styled>
      <ul>
        <li>Games</li>
        <li>Users</li>
        <li>
          <span>Scenarios</span>
          <ul>
            <li>New</li>
            <li>Popular</li>
            <li>Search</li>
          </ul>
        </li>
      </ul>
    </Styled>
  );
}
