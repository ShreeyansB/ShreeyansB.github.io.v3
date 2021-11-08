import React from "react";
import classes from "./LogoSvg.module.css";
import {Box, useColorMode } from "@chakra-ui/react";
import { Colors as colors } from "../../Colors";

const LogoSvg = (props) => {
  const { colorMode } = useColorMode();

  const myStyle = {
    height: props.height,
    width: props.height,
    margin: props.margin && "0rem",
    stroke: colorMode === "light" ? colors.primary : colors.primaryDark,
    fill: colorMode === "light" ? colors.primary : colors.primaryDark,
    padding: 3,
  };

  return (
    <Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="500"
        x="0"
        y="0"
        viewBox="0 0 500 500"
        className={`${classes.rotate}`}
        style={myStyle}
      >
        <g>
          <path d="M5 5H50.556V495H5z" className={classes.stroke}></path>
          <path
            d="M116.1113 495L116.1113 449.4443 449.4443 449.4443 449.4443 272.7773 116.1113 272.7773 116.1113 5 495 5 495 50.5557 161.6665 50.5557 161.6665 227.2222 495 227.2222 495 495z"
            className={classes.strokealt}
          ></path>

          <g>
            <path
              d="M227.222 116.111H495V161.666H227.222z"
              className={classes.stroke}
            ></path>
          </g>
          <g>
            <path
              d="M116.111 338.333H383.888V383.889H116.111z"
              className={classes.stroke}
            ></path>
          </g>
        </g>
      </svg>
    </Box>
  );
};

export default LogoSvg;
