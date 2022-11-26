import styled from "styled-components";

export default styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
  font-family: "Roboto", sans-serif;

  min-height: 100vh;
  background: rgb(45, 32, 11);
  background: radial-gradient(
    circle,
    rgba(45, 32, 11, 1) 0%,
    rgba(32, 22, 10, 1) 45%,
    rgba(0, 0, 0, 1) 100%
  );
  color: white;

  display: grid;
  grid-template-columns: 0.7fr 1.6fr 0.7fr;
  grid-template-rows: 0.2fr 1.9fr;
  gap: 1em 1em;
  grid-template-areas:
    "topbar topbar topbar"
    "content content navbar";
`;
