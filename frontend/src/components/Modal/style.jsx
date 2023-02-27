import styled from "styled-components";

export default styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    background-color: white;
    width: 50vw;
    min-height: 30vh;

    * {
      color: black;
    }
  }
`;
