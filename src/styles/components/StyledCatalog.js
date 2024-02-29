import styled from "styled-components";

export const StyledCatalog = styled.section`
  padding: 0 calc(110 / 1920 * 100%) 7%;
  position: relative;
  .blur {
    position: absolute;
    width: 30vw;
    height: 30vw;
    background: #ccff00;
    filter: blur(10vw);
    right: 10vw;
    top: 12vw;
    z-index: 1;
    @media (max-width: 430px) {
      width: 50vw;
      height: 50vw;
      filter: blur(15vw);
      top: 45vw;
      right: 5vw;
    }
  }
  .catalog {
    z-index: 100;
    position: relative;
  }
  .slick-prev,
  .slick-next {
    width: 5vw;
    height: 5vw;
    border-radius: 2.5vw;
    background: #ac28fd;
    z-index: 100;
    @media (max-width: 430px) {
      display: none;
    }
  }

  .button-prev {
    transform: translateX(1.5vw);
    width: 80%;
  }
  .button-next {
    transform: translateX(-1.5vw);
    width: 80%;
  }
  .slick-prev::before,
  .slick-next::before {
    content: "";
  }
  .slick-disabled {
    background: #d1abe8;
  }

  .slick-dots li a {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6vw;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
    padding: 1vw;
  }

  .slick-dots li.slick-active a {
    color: #ac28fd;
  }
  .slick-dots li {
    width: 12vw;
    white-space: nowrap;
    @media (max-width: 430px) {
      width: 3vw;
    }
  }
  .slick-dots li.slick-active button:before {
    @media (max-width: 430px) {
      color: #abf337;
    }
  }
  .slick-dots li button:before {
    @media (max-width: 430px) {
      color: #ac28fd;
      opacity: 1;
      transform: scale(3);
    }
  }

  .slick-dots {
    width: 80vw;
    height: 5vw;
    list-style: none;
    position: absolute;
    top: 2vw;
    transform: translateX(5%);
    @media (max-width: 430px) {
      top: auto;
    }
  }
  .slick-dots li a:hover,
  .slick-active {
    color: #ac28fd;
    @media (max-width: 430px) {
      color: #abf337;
    }
  }

  .slick-slider {
    position: relative;
    z-index: 100;
  }
`;
