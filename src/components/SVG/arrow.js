import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { Colors as colors } from "../../Colors";
import classes from "./arrow.module.css";
import ScrollAnimation from "react-animate-on-scroll";

function ArrowSVG(props) {
  const { colorMode } = useColorMode();
  const myStyle = {
    fill: "none",
    stroke: colorMode === "light" ? colors.secondary : colors.alternate,
  };

  return (
    <ScrollAnimation animateIn={classes.line} animateOnce={true} offset={180}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 430 100"
        xmlSpace="preserve"
        style={myStyle}
        className={classes.arrow}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="9.828"
          d="M7.32 39.189c34.611 0 34.611 21.622 69.224 21.622 34.611 0 34.611-21.622 69.222-21.622 34.613 0 34.613 21.622 69.226 21.622 34.614 0 34.614-21.622 69.227-21.622 34.616 0 34.616 21.622 69.231 21.622s34.615-21.622 69.23-21.622"
          // className={classes.line}
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="9.828"
          d="M385.9027 10.2218L422.6808 39 402.9027 83.7782"
          // className={classes.tip}
        ></path>
      </svg>
    </ScrollAnimation>
  );
}

export default ArrowSVG;
