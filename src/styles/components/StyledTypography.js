import styled from "styled-components";

export const StyledH2 = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  font-size: 5vw;
  line-height: 100%;
  color: #abf337;
  margin-bottom: 3vw;
  @media (max-width: 430px) {
    flex-direction: column;
    font-size: 10vw;
    line-height: 100%;
  }
`;
export const StyledH2Left = styled(StyledH2)`
  text-align: left;
`;

export const StyledH3 = styled.h3`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 4vw;
  line-height: 100%;
  text-align: center;
  color: #abf337;
  margin-bottom: 3vw;
  @media (max-width: 430px) {
    font-size: 7vw;
    white-space: nowrap;
  }
`;
export const StyledH3Left = styled(StyledH3)`
  text-align: left;
  margin-bottom: 1vw;
`;

export const StyledH4 = styled.h4`
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 2.2vw;
  line-height: 90%;
  color: #ffffff;
  margin-bottom: 0.9vw;
  @media (max-width: 430px) {
    font-size: 4.7vw;
    margin-bottom: 2vw;
  }
`;
export const StyledP500 = styled.p`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 1.9vw;
  line-height: 120%;
  color: #ffffff;
  margin-bottom: 1vw;
  @media (max-width: 430px) {
    font-size: 4.5vw;
  }
`;

export const StyledP = styled.p`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 1.4vw;
  line-height: 120%;
  color: #ffffff;
  @media (max-width: 430px) {
    margin-bottom: 2vw;
    font-size: 3.5vw;
  }
`;
