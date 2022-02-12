import { createGlobalStyle } from 'styled-components';

export const colours = {
  white: "#FBFBFE",
  linkHover: "#ff3678",
  link: "#1982d1"
}

const CENTERPIECE_WIDTH = 808;
const APP_MARGIN = 30;
const SMALL_SCREEN_WIDTH = CENTERPIECE_WIDTH + (2 * APP_MARGIN) - 1;
const XSMALL_SCREEN_WIDTH = 610;

export const dims = {
  centerpieceWidth: `${CENTERPIECE_WIDTH}px`,
  appMargin: `${APP_MARGIN}px`,
  smallScreenWidth: `${SMALL_SCREEN_WIDTH}px`,
  xSmallScreenWidth: `${XSMALL_SCREEN_WIDTH}px`,
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${colours.white};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  textarea, button {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${colours.link};
  }

  a:hover {
    text-decoration: underline;
    color: ${colours.linkHover};
  }
`;
