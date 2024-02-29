import styled from "styled-components";

export const StyledGameItem = styled.div`
  margin: 0 auto;
  width: 90%;
  border: 7px solid #ac28fd;
  border-radius: 2vw;
  padding: 2vw 4vw;
  background-color: #1e1d43;
  @media (max-width: 430px) {
    width: 100%;
    border-radius: 30px;
    border: 2px solid #ac28fd;
    height: 120vw;
  }
  .slide_number {
    display: none;
    @media (max-width: 430px) {
      display: block;
      color: white;
      font-size: 7vw;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .slide_number_big {
    @media (max-width: 430px) {
      display: block;
      color: white;
      font-size: 9vw;
      position: absolute;
      top: -2vw;
      right: 6vw;
    }
  }
  .game_wrapper {
    display: flex;
    align-items: flex-start;
    padding: 7vw 0 5vw;
    @media (max-width: 430px) {
      flex-direction: column;
    }
  }

  .game {
    width: 50%;
    margin-right: 2vw;
    @media (max-width: 430px) {
      width: 100%;
      position: relative;
    }
  }
  .game p {
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 1.5vw;
    line-height: 120%;
    color: #ffffff;
    margin-bottom: 1vw;
    @media (max-width: 430px) {
      margin-top: 50vw;
      font-size: 4.5vw;
    }
  }
  .buttons {
    display: flex;
    align-items: center;
    @media (max-width: 430px) {
      margin-top: 3vw;
    }
  }
  .or {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 2vw;
    line-height: 120%;
    color: #ffffff;
    margin: 0 1vw;
    transform: translateY(20%);
    @media (max-width: 430px) {
      font-size: 5vw;
      margin: 0 7vw;
    }
  }
  .about_qr_code {
    position: absolute;
    bottom: -5.2vw;
    right: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 1vw;
    line-height: 100%;
    color: #ffffff;
    text-align: right;
    @media (max-width: 430px) {
      font-size: 3vw;
      bottom: -11vw;
      width: 35vw;
      right: -1vw;
    }
  }
  .game_picture {
    width: 40vw;
    @media (max-width: 430px) {
      transform: translateY(-195%);
      width: 75vw;
    }
  }
  .qr_code {
    width: 8vw;
    @media (max-width: 430px) {
      width: 20vw;
    }
  }
`;

export const StyledGameItemMobiles = styled.div``;
