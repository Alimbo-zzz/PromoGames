import styled from "styled-components";

export const StyledCursor = styled.div`
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  transform: translateZ(-9em);
  filter: blur(6vw);
  width: 12vw;
  height: 12vw;
  @media (max-width: 1440px) {
    width: 14vw;
    height: 14vw;
  }
  @media (max-width: 1200px) {
    width: 16vw;
    height: 16vw;
  }
  @media (max-width: 820px) {
    width: 19vw;
    height: 19vw;
  }
  @media (max-width: 768px) {
    width: 21vw;
    height: 21vw;
  }
  @media (max-width: 430px) {
    display: none;
  }
`;
