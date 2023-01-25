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
    border-radius: 0.5rem;
    border: 1px solid rgba(40, 40, 40, 1);
    background-color: rgba(40, 40, 40, 0.6);
    padding-left: 1rem;

    &.open {
      background-color: white;
      color: black;
      border-radius: 0.5rem 0.5rem 0rem 0rem;
      border: 0;
    }
  }
  .searchbar > ul {
    background-color: white;
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
        color: black;
        text-decoration: none;

        p {
          width: 80%;

          display: flex;
          align-items: center;
          padding-left: 1rem;
        }

        img {
          width: 20%;
        }
      }
    }
  }
`;
