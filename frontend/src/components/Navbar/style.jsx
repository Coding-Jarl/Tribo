import styled from "styled-components";

export default styled.nav`
  grid-area: navbar;

  text-align: right;
  padding: 2rem;
  line-height: 4.5rem;
  text-transform: uppercase;
  font-size: 2.4rem;

  ul ul {
    text-transform: initial;
    line-height: 1.2rem;
    font-size: 1.2rem;
  }
`;
