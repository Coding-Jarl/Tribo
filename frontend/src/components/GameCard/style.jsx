import styled from "styled-components";

export default styled.article`
  position: relative;
  width: 15rem;
  aspect-ratio: 2.5;
  margin: 4rem;

  // Open Card
  & > main {
    display: none;
    z-index: 1;
    position: absolute;
    left: -12.5%;
    top: 0;
    width: 125%;
    aspect-ratio: 3/4;
    background-color: rgba(235, 235, 235, 1);
    border: 1px solid rgba(200, 200, 200, 0.75);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    .picture {
      height: 50%;
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.7) 0%,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 0) 75%,
          rgba(0, 0, 0, 0.7) 100%
        ),
        url("${(props) => props.thumbUrl}");
      background-size: cover;
      background-position: center;
    }
    .cartouche {
      height: 50%;

      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;

      > * {
        margin: 0.25rem 1rem;
      }
    }
    .actions {
      button {
        width: 1.5rem;
        aspect-ratio: 1;
        border-radius: 50%;
        border: 1px grey solid;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .stats {
      display: flex;
      justify-content: space-between;
    }
  }
  &.active > main {
    display: block;
  }

  // Medallion
  aside {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0) 25%,
        rgba(0, 0, 0, 0) 75%,
        rgba(0, 0, 0, 0.7) 100%
      ),
      url("${(props) => props.thumbUrl}");
    background-size: cover;
    background-position: center;

    h2 {
      color: white;
      position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
