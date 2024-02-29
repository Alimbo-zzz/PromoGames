import styled from "styled-components";

export const StyledHeader = styled.div`
  position: relative;
  @media (max-width: 430px) {
    margin-bottom: 70px;
  }
  .header {
    padding: 1vw 5vw;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 430px) {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }
  }
  .logo {
    width: 100%;
    max-width: 10%;
    height: 10%;
    margin-right: auto;
    object-fit: contain;
    @media (max-width: 430px) {
      max-width: 108px;
      height: 50px;
    }
  }
  .nav {
    position: relative;
    font-size: 1.3vw;
    line-height: 2vw;
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    @media (max-width: 430px) {
      display: none;
    }
  }
  nav ul {
    width: 100%;
    display: flex;
    list-style-type: none;
  }
  .nav li {
    padding: 0 4%;
    white-space: nowrap;
    cursor: pointer;
  }
  .nav a {
    color: #ffffff;
  }
  .nav a:hover {
    text-shadow: 0 0 10px rgba(235, 0, 255, 0.92);
    color: #ac28fd;
  }
  .header_nav_block {
    width: 35%;
    @media (max-width: 430px) {
      visibility: hidden;
      position: absolute;
      width: 45%;
      background: #1e1d43;
      border-radius: 20px;
      top: 60px;
      right: -10px;
      z-index: 100;
    }
  }
  .nav .active-scroll-spy a {
    text-shadow: 0 0 10px rgba(235, 0, 255, 0.92);
    color: #ac28fd;
  }

  .lottie_purple {
    width: 8vw;
    @media (max-width: 430px) {
      width: 21vw;
      position: absolute;
    }
  }
  .fade {
    animation: opacity_out 2s;
  }
  .header_nav_block.active {
    @media (max-width: 430px) {
      visibility: visible;
      animation: opacity_in 2s;
    }
  }
  @keyframes opacity_in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes opacity_out {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }

  .nav {
    @media (max-width: 430px) {
      width: 85%;
      height: 100%;
      background: #1e1d43;
      border: 2px solid #ac28fd;
      border-radius: 20px;
      transition: 0.3s;
      display: flex;
      align-items: center;
    }
  }
  .nav ul {
    @media (max-width: 430px) {
      display: flex;
      height: 80%;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  }
  .nav ul li {
    @media (max-width: 430px) {
      color: #ffffff;
      font-family: "Raleway", sans-serif;
      font-weight: 500;
      font-size: 4.5vw;
      line-height: 100%;
      text-align: center;
      padding: 20px 0;
    }
  }

  .nav ul li {
    @media (max-width: 430px) {
      list-style: none;
    }
  }
  @keyframes header_f {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @keyframes header_unf {
    0% {
      opacity: 1;
      transform: translateY(0%);
      position: fixed;
    }
    60% {
      opacity: 0;
      transform: translateY(-100%);
      position: fixed;
    }
    70% {
      opacity: 0;
      transform: translateY(0%);
    }
    100% {
      opacity: 1;
    }
  }
  .header[data-fix="true"] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100vw;
    z-index: 2000;
    box-shadow: 0 2px 85px rgba(122, 24, 247, 0.3);
    background: #1e1d43;
    animation-duration: 0.5s;
    animation-name: header_f;
  }
  .header[data-fix="false"] {
    animation: header_unf 0.8s forwards;
  }
  .burger-btn {
    @media (max-width: 430px) {
      width: 24px;
      height: 16px;
      position: relative;
      margin-right: 15px;
      cursor: pointer;
      z-index: 20000;
      margin-left: 20px;
    }
  }
  .burger-btn span {
    @media (max-width: 430px) {
      position: absolute;
      top: 8px;
      width: 24px;
      height: 2px;
      background-color: #ffffff;
    }
  }
  .burger-btn.active span {
    @media (max-width: 430px) {
      transform: translateY(1px) rotate(45deg);
    }
  }
  .burger-btn:before {
    @media (max-width: 430px) {
      content: "";
      position: absolute;
      top: 2px;
      width: 24px;
      height: 2px;
      background-color: #ffffff;
      transition: 0.3s all ease;
    }
  }
  .burger-btn.active:before {
    @media (max-width: 430px) {
      transform: translateY(6px) rotate(-45deg);
    }
  }
  .burger-btn:after {
    @media (max-width: 430px) {
      content: "";
      position: absolute;
      width: 24px;
      height: 2px;
      background-color: #ffffff;
      transition: 0.4s all ease;
    }
  }
  .burger-btn:after {
    @media (max-width: 430px) {
      content: "";
      position: absolute;
      bottom: 0;
      width: 24px;
      height: 2px;
      background-color: #ffffff;
    }
  }
  .burger-btn.active:after {
    @media (max-width: 430px) {
      transform: translateY(-5px) rotate(45deg);
    }
  }

  .icon {
    width: 3vw;
    height: 3vw;
    border-radius: 50%;
    @media (max-width: 430px) {
      width: 8vw;
      height: 8vw;
      margin-top: 15%;
    }
  }
  .link {
    margin-right: 2vw;
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
    top: 5vw;
    right: -1vw;
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

export const StyledScroll = styled.div`
  position: fixed;
  right: 4vw;
  bottom: 3vw;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 18px;
  z-index: 200;
  width: 80px;
  height: 80px;
  color: #1e1d43;
  background: #abf337;
  border-radius: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
	align-items: center;
	justify-content: center;
  gap: 5px;

  @media (max-width: 430px) {
    font-size: 14px;
    line-height: 100%;
    width: 60px;
    height: 60px;
    z-index: 3000;
    bottom: 5vw;
  }
  svg {
    width: 1.2em;
    height: 1.2em;
  }
  &:hover {
    background: #81bf1d;
    box-shadow: 0 0 25px rgba(171, 243, 55, 0.5);
    color: white;
  }
  &:hover > svg path {
    fill: white;
  }
`;
