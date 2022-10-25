import styled from "styled-components";

export default styled.article`
  position: relative;
  width: 15rem;
  aspect-ratio: 2.5;
  margin: auto;

  & > main {
    position: absolute;
    opacity: 0;
    transition: 0.2s opacity ease-in-out 0.25s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: white;

    width: 125%;
    aspect-ratio: 3/4;
    top: 0;
    left: -12.5%;
  }

  &:hover > main {
    opacity: 1;
  }

  aside {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0) 25%,
        rgba(0, 0, 0, 0) 75%,
        rgba(0, 0, 0, 0.4) 100%
      ),
      url("${(props) => props.rawData.thumb}");
    background-size: cover;
    background-position: center;
  }
`;
