import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./Theme";

ReactDOM.render(
  <React.Fragment>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
