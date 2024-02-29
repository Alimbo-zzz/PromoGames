import styled from "styled-components";

export const StyledFooter = styled.section`
  padding: 4vw calc(110 / 1920 * 100%);
  .footer_wrapper {
    display: flex;
    width: 100%;
    color: white;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 1.5vw;
    line-height: 120%;
    justify-content: space-between;
    @media (max-width: 430px) {
      font-size: 3.5vw;
      flex-direction: column;
    }
  }
  .layout_block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 430px) {
      position: relative;
    }
  }
  .postal_address {
    width: 25%;
    @media (max-width: 430px) {
      width: 40%;
      margin-bottom: 6vw;
    }
  }
  .nav_menu {
    display: flex;
    list-style: none;
    justify-content: space-around;
    @media (max-width: 430px) {
      flex-direction: column;
      position: absolute;
      top: -37vw;
      right: 15%;
    }
  }
  .nav_menu li {
    @media (max-width: 430px) {
      padding: 2vw;
    }
  }
  .nav_menu a {
    color: white;
    @media (max-width: 430px) {
      font-size: 4vw;
    }
  }
  .nav_menu a:hover {
    color: #ac28fd;
  }
  .small_text {
    font-size: 1.1vw;
    text-align: center;
    @media (max-width: 430px) {
      font-size: 2.5vw;
      text-align: left;
      margin-bottom: 2vw;
    }
  }
  .logo {
    align-self: center;
    @media (max-width: 430px) {
      align-self: flex-start;
    }
  }
  .logo > img {
    object-fit: contain;
    width: 120%;
    @media (max-width: 430px) {
      align-self: flex-start;
      width: 50%;
    }
  }
`;
