import styled from "styled-components";

export default styled.div`
  display: flex;

  & > * {
    border: 2px dotted yellowgreen;
  }

  main {
    width: 65%;

    .tabs {
      display: flex;
      border-bottom: 1px solid grey;

      & > * {
        border: 1px solid grey;
        border-bottom: 0;
        padding: 0 1rem;
      }
    }
  }

  aside {
    width: 32%;
    background-color: white;
    color: black;

    .picture {
      width: 90%;
      margin: auto;
      aspect-ratio: 1;
      background-image: url("${(props) => props.thumbUrl}");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;
