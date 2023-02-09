import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  /* font-family: serif; */

  scroll-behavior: smooth;
}
body {
  background-color: ${(props) => props.theme.bgColor};
}
`;
