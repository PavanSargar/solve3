import { createGlobalStyle } from "styled-components";
import SEGOEUI from "./src/assets/font/SegoeUI.woff";

export default createGlobalStyle`
*,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  background-color: ${(props) => props.theme.dark};
}
@font-face {
  font-family: "Segoe UI Regular";
  src: local("Segoe UI Regular"), url(${SEGOEUI}) format("woff")
}


h1,h2,h3,h4,h5,h6, button {
  font-family: ${(props) => props.theme.fontSegoe}, sans-serif !important;
}

p, input, span, ul, li {
  font-family: ${(props) => props.theme.fontLato}, sans-serif;
}


body {
  background-color: ${(props) => props.theme.bgColor};
}
`;
