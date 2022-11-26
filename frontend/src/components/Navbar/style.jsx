import styled from "styled-components";

export default styled.nav`
  grid-area: navbar;

  text-align: right;
  padding: 2rem;
  text-transform: uppercase;

  & > ul > li > h2 {
    line-height: 4.5rem;
    font-size: 2.4rem;
    -webkit-text-stroke-color: #fff;
    -webkit-text-stroke-width: 0.02em;
    -webkit-text-fill-color: transparent;
    background-color: rgba(255, 255, 255, 0);
    transition: 0.2s linear all;
    background-clip: text;
    -webkit-background-clip: text;

    &:hover {
    }
  }
  & > ul > li:hover > h2 {
    background-color: rgba(255, 255, 255, 1);
  }

  ul ul {
    line-height: 1.2rem;
    font-size: 1.2rem;
    line-height: 2.5rem;
    letter-spacing: 0.5rem;
  }
`;
