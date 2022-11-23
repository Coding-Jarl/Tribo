import styled from "styled-components";

export default styled.header`
  grid-area: topbar;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;

  input {
    border-radius: 1rem;
    border: 1px solid rgba(40, 40, 40, 1);
    background-color: rgba(40, 40, 40, 0.6);
    color: rgba(200, 200, 200, 1);
    padding-left: 1rem;
  }
`;
