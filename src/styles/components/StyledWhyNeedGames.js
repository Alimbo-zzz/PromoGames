import styled from "styled-components";

export const StyledWhyNeedGames = styled.section`
  padding: 0 calc(110 / 1920 * 100%) 15%;
  .reasons {
    display: flex;
    justify-content: space-between;
    @media (max-width: 430px) {
      flex-direction: column;
    }
  }
  .reasons_block {
    border: 0.5vw solid #ac28fd;
    border-radius: 2vw;
    width: 28.5vw;
    padding: 1.5vw;
    @media (max-width: 430px) {
      border-radius: 20px;
      width: 100%;
      padding: 5vw;
      border-width: 2px;
      margin-bottom: 3vw;
    }
  }
  .reasons_block img {
    width: 5vw;
    height: 5vw;
    margin-bottom: 0.8vw;
    @media (max-width: 430px) {
      width: 10vw;
      height: 10vw;
      margin-bottom: 2vw;
    }
  }
`;
