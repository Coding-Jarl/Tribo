import styled from "styled-components";

export default styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 0 2rem 20rem 2rem;

  & > * {
    position: relative;
    width: 16rem;
    aspect-ratio: 2.5;
    margin: 0.5rem;
  }

  .filter {
    background-color: rgb(45, 32, 11);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    & > * {
      width: 60%;
    }
  }
`;
