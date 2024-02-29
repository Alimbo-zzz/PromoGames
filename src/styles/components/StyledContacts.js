import styled from "styled-components";

export const StyledContacts = styled.section`
  padding: 0 calc(110 / 1920 * 100%);
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 30vw;
  transform-style: preserve-3d;
  @media (max-width: 430px) {
    height: 80vw;
  }
  .image_block {
    position: relative;
    transform-style: preserve-3d;
    @media (max-width: 430px) {
      position: absolute;
      top: 30vw;
      width: 80%;
      right: 0;
    }
  }
  .lottie {
    transform: translateZ(-1em);
    width: 50vw;
    @media (max-width: 430px) {
      width: 75vw;
    }
  }
  .letter_wrapper {
    position: absolute;
    @media (max-width: 430px) {
      top: -12vw;
      right: 10vw;
      height: 70vw;
      overflow: hidden;
      width: 95%;
    }
  }
  .letter_wrapper img {
    width: 35vw;
    transform: translate(20%, -105%) translateZ(1em);
    @media (max-width: 430px) {
      width: 70%;
      transform: translate(35%, 25%);
    }
  }

  .contacts {
    width: 40%;
    margin-top: 5vw;
  }
  .icon {
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
    @media (max-width: 430px) {
      width: 8vw;
      height: 8vw;
      margin-top: 15%;
    }
  }
  .link {
    margin-top: 0.5vw;
    margin-right: 1.5vw;
    @media (max-width: 430px) {
      margin-top: 0;
    }
  }
  .icon:hover {
    box-shadow: 0 0 20px rgba(172, 40, 253, 0.8);
  }
  .tooltip {
    position: relative;
    border-right: 10px;
  }
  .tooltip > span {
    visibility: hidden;
    background: #abf337;
    color: #1e1d43;
    box-shadow: 0 0 20px rgba(171, 243, 55, 0.5);
    border-radius: 10px;
    text-align: center;
    padding: 0.7vw;
    position: absolute;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 1vw;
    line-height: 100%;
    z-index: 9;
    top: 3vw;
    right: -4vw;
    opacity: 0;
    transition: opacity 1s;
    white-space: nowrap;
    @media (max-width: 430px) {
      top: 12vw;
      font-size: 3.1vw;
      padding: 2vw;
      border-radius: 8px;
      right: -13vw;
    }
  }
  .tooltip input {
    display: none;
  }
  .tooltip input:checked + span {
    visibility: visible;
    opacity: 1;
  }
`;
