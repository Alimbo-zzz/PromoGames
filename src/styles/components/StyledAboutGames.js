import styled from "styled-components";

export const StyledAboutGames = styled.section`
  padding: 3vw calc(110 / 1920 * 100%);
  display: flex;
  margin-bottom: 8vw;
  @media (max-width: 430px) {
    flex-direction: column;
  }
  .about_block {
    width: 53%;
    margin-top: 8vw;

    @media (max-width: 430px) {
      width: 100%;
      margin: 0 0 5vw 0;
    }
  }
  span {
    font-weight: 900;
    font-size: 2.3vw;
    line-height: 130%;
    text-decoration: underline wavy #ac28fd;
    text-underline-offset: 0.5vw;
    @media (max-width: 430px) {
      font-size: 5vw;
      text-underline-offset: 1vw;
    }
  }
  .image_block {
    position: relative;
    transform-style: preserve-3d;
    width: 60%;
    @media (max-width: 430px) {
      width: 90%;
      margin: 0 auto;
    }
  }
  .lottie {
    transform: translateZ(-1em);
  }
  img {
    width: 35vw;
    position: absolute;
    top: -30vw;
    right: 7vw;
    @media (max-width: 430px) {
      width: 75%;
      margin: 0 auto;
      top: -50vw;
    }
  }
`;
