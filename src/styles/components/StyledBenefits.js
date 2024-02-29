import styled from "styled-components";

export const StyledBenefits = styled.section`
  padding: 3vw calc(110 / 1920 * 100%);
  position: relative;
  margin-bottom: 5vw;
  @media (max-width: 430px) {
    margin-top: 80vw;
    margin-bottom: 5vw;
  }
  .benefits {
    display: flex;
    justify-content: space-between;
    @media (max-width: 430px) {
      flex-direction: column;
    }
  }
  .green_circle {
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    background: #abf337;
    position: absolute;
    top: 15vw;
    left: 15vw;
    @media (max-width: 430px) {
      width: 70vw;
      height: 70vw;
      top: -80vw;
      left: 14vw;
    }
  }
  .lady_image {
    margin-left: 10vw;
    margin-top: 2vw;
    width: 30vw;
    position: relative;
    z-index: 11;
    @media (max-width: 430px) {
      width: 70%;
      position: absolute;
      top: -103vw;
      margin-left: 0;
      left: 13vw;
    }
  }
  .blur {
    background: #ac28fd;
    filter: blur(170px);
    position: absolute;
    top: 20%;
    left: 25%;
    width: 25vw;
    height: 25vw;
    @media (max-width: 430px) {
      width: 50vw;
      height: 50vw;
      filter: blur(100px);
      top: -65%;
      left: 40%;
    }
  }
  .benefits_list {
    list-style: none;
    position: relative;
    z-index: 11;
    width: 40%;
    margin-top: 2vw;
    @media (max-width: 430px) {
      width: 100%;
    }
  }
  .benefits_list li {
    position: relative;
    margin-bottom: 3vw;
    @media (max-width: 430px) {
      margin-bottom: 10vw;
      margin-top: 5vw;
    }
  }
  .benefits_list li span {
    position: absolute;
    left: -4vw;
    top: -0.5vw;
    font-size: 2.6vw;
    color: #ac28fd;
    @media (max-width: 430px) {
      left: 0;
      top: -8vw;
      font-size: 8vw;
    }
  }
`;
