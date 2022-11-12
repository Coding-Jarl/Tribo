import styled from "styled-components";

export default styled.article`
  position: relative;
  width: 15rem;
  aspect-ratio: 2.5;
  margin: 4rem;

  & > main {
    position: absolute;
    left: -12.5%;
    top: 0;
    width: 125%;
    aspect-ratio: 3/4;
    background-color: rgba(235, 235, 235, 1);
    border: 1px solid rgba(200, 200, 200, 0.75);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    display: none;
  }
  &.active > main {
    display: block;
  }

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
      url("${(props) => props.rawData.thumb}");
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
