import styled from "styled-components";

export const StyledButton = styled.div`
  position: relative;
  margin-top: 2vw;
  @media (max-width: 430px) {
    text-align: center;
  }
  a {
    padding: 2vw 7vw;
    width: 35vw;
    height: 7vw;
    background: #abf337;
    border-radius: 1vw;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 1.7vw;
    line-height: 100%;
    color: black;
    @media (max-width: 430px) {
      font-size: 5vw;
      width: 90%;
      height: 100%;
      padding: 6vw 15vw;
      border-radius: 20px;
    }
  }
  a:hover {
    background: #81bf1d;
    box-shadow: 0 0 25px rgba(171, 243, 55, 0.5);
    color: white;
  }
  a:active {
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.46);
  }
  &:hover span {
    color: white;
  }
  span {
    position: absolute;
    top: 50%;
    transform: translateY(-47%);
    right: 36%;
    font-size: 2.7vw;
    @media (max-width: 430px) {
      right: 13%;
      font-size: 7vw;
    }
  }
`;

export const StyledMiniButton = styled(StyledButton)`
  margin: 0;
  a {
    background: #1e1d43;
    border: 4px solid #abf337;
    border-radius: 1.5vw;
    padding: 1vw 5vw;
    font-size: 1.2vw;
    color: #ffffff;
    @media (max-width: 430px) {
      padding: 3vw 12vw;
      font-size: 3vw;
      border-radius: 9px;
      border-width: 2px;
    }
  }
  span {
    position: absolute;
    top: 50%;
    color: white;
    transform: translateY(-47%);
    right: 22%;
    font-size: 1.5vw;
    @media (max-width: 430px) {
      right: 20%;
      font-size: 5vw;
    }
  }
`;
