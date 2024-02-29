import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1em;
    scroll-behavior:smooth;
  }
  a {
    text-decoration: none;
    color: black;
  }

  body{
    overflow-x: hidden;
  }

`;
export default GlobalStyles;
