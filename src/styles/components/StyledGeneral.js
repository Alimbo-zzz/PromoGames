import styled from "styled-components";
import active from "/icons/active.svg";

export const StyledGeneral = styled.section`
  padding: 15% calc(110 / 1920 * 100%);
  position: relative;
  transform-style: preserve-3d;
  .green_blur {
    position: absolute;
    width: 20vw;
    height: 20vw;
    left: 2vw;
    top: 10vw;
    background: #ccff00;
    filter: blur(120px);
    transform: translateZ(-10em);
    @media (max-width: 430px) {
      width: 50vw;
      height: 45vw;
      left: 4vw;
      top: 40vw;
      filter: blur(85px);
    }
  }
  .content {
    display: flex;
    transform-style: preserve-3d;
    @media (max-width: 430px) {
      flex-direction: column-reverse;
      position: relative;
    }
  }
  .promo_pic {
    flex: 1;
    position: relative;
    transform-style: preserve-3d;
    @media (max-width: 430px) {
      position: absolute;
      top: 45vw;
    }
  }

  .lottie_purple {
    width: 8vw;
    position: absolute;
    top: 3vw;
    right: 12.5vw;
    @media (max-width: 430px) {
      width: 18vw;
      top: 7vw;
      right: 19vw;
    }
  }

  .lottie {
    transform: translateZ(-1em);
  }
  .girl_pic {
    width: 30vw;
    position: absolute;
    top: -28vw;
    transform: translateZ(2em);
    @media (max-width: 430px) {
      position: absolute;
      width: 75%;
      top: -55vw;
      left: 15vw;
    }
  }
  .promo {
    width: 50%;
    padding-left: 2vw;
    @media (max-width: 430px) {
      width: 100%;
    }
  }
  .promo > h1 {
    font-family: "Raleway", sans-serif;
    font-weight: 800;
    font-size: 6vw;
    line-height: 100%;
    background-image: linear-gradient(
      271.04deg,
      #ac28fd 29.49%,
      #27d9f1 64.12%,
      #ffea2e 95.8%
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    @media (max-width: 430px) {
      font-size: 13vw;
    }
  }
  .promo > p {
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 2.2vw;
    line-height: 180%;
    color: #ffffff;
    padding: 2% 0 6%;
    position: relative;
    @media (max-width: 430px) {
      font-size: 5vw;
      margin-bottom: 90vw;
    }
  }

  .mouse {
    position: absolute;
    bottom: -10vw;
    left: 50%;
    width: 3vw;
    height: 3vw;
    @media (max-width: 430px) {
      display: none;
    }
  }
  // .underline::after{
  //  content:'';
  //   position: absolute;
  //   width: 7vw;
  //   height: 2vw;
  //   background-image: url(${active});
  //   background-size: 100%;
  //   background-repeat: no-repeat;
  //   top: 4vw;
  //   left: 22vw;
  //   @media (max-width: 430px) {
  //     width: 15vw;
  //     height: 5vw;
  //     top: 9vw;
  //     left: 52vw;
  //   }
`;
