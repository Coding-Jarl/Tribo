import Styled from "./style";

export default function Header() {
  return (
    <Styled>
      <nav>
        <ul>
          <li>Games</li>
          <li>Users</li>
          <li>Scenarios</li>
        </ul>
      </nav>
      <p>Tribo!</p>
      <input type="search" placeholder="Azul, ValhallaCode, ..." />
    </Styled>
  );
}
