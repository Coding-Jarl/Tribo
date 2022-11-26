import styled from "styled-components";

export default styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

  p {
    font-family: "Permanent Marker";
    font-size: 2rem;
  }

  grid-area: topbar;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  & > * {
    margin: 1rem;
  }

  input {
    border-radius: 1rem;
    border: 1px solid rgba(40, 40, 40, 1);
    background-color: rgba(40, 40, 40, 0.6);
    color: rgba(200, 200, 200, 1);
    padding-left: 1rem;
  }
`;
