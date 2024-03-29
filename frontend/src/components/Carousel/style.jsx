import styled from "styled-components";

export default styled.div`
  .myCarousel {
    width: 80%;
    aspect-ratio: 16/9;
  }

  .mySlide {
    width: 100%;
    background: url("https://assets.dicebreaker.com/dungeons-and-dragons-5E-players-handbook-art-5.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/dungeons-and-dragons-5E-players-handbook-art-5.jpg");
  }

  .mySlide .content {
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8267682072829132) 0%,
      rgba(32, 22, 10, 0) 100%
    );
    color: white;
    padding: 2rem;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
  }

  .mySlide a {
    text-decoration: none;
  }

  .mySlide h2 {
    font-size: 2.5rem;
    padding-bottom: 2rem;
  }
  .mySlide p {
    font-size: 1.5rem;
    width: 50%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
