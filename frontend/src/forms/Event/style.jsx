import styled from "styled-components";

export default styled.form`
  background-color: yellowgreen;
  padding: 2rem;

  fieldset {
    display: flex;
    flex-flow: column nowrap;
  }

  input {
    padding: 1rem;
    margin: 1rem 0;
  }

  .spacetime,
  .guestsgames {
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem;

    > * {
      width: 50%;
    }
  }

  .map {
    aspect-ratio: 16/9;
  }
`;
