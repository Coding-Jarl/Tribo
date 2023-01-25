import styled from "styled-components";

export default styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

  .siteTitle {
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

  .searchbar {
    position: relative;
  }
  .searchbar > input {
    border-radius: 1rem;
    border: 1px solid rgba(40, 40, 40, 1);
    background-color: rgba(40, 40, 40, 0.6);
    color: rgba(200, 200, 200, 1);
    padding-left: 1rem;
  }
  .searchbar > ul {
    background-color: yellowgreen;
    color: black;
    position: absolute;
    width: 100%;

    li {
      width: 100%;
      overflow: hidden;
      aspect-ratio: 4;

      a {
        display: flex;
        flex-flow: row nowrap;
        font-family: inherit;

        img {
          width: 20%;
        }
      }
    }
  }
`;
