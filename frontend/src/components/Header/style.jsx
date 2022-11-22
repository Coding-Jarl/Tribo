import styled from "styled-components";

export default styled.header`
  height: 5vh;
  background-color: #832561;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    text-transform: uppercase;
  }

  nav ul {
    display: flex;
    gap: 2rem;
  }
`;
