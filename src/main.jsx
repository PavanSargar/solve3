import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalCss from "../global.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
