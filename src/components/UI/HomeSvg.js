import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import HSLayer1 from "./HomeSvgLayers/HSLayer1";
import HSLayer2 from "./HomeSvgLayers/HSLayer2";
import HSLayer3 from "./HomeSvgLayers/HSLayer3";
import classes from "./HomeSvg.module.css";

const HomeSvg = (props) => {
  useEffect(() => {
    document.getElementById("homesvg").style.animationDelay = "1.2s";
    setTimeout(() => {
      document.getElementById("homesvg").style.animationDelay = "0s";
    }, 2000);
  });

  return (
    <Box
      position="relative"
      h={{ base: "24rem", xl: "28rem", "2xl": "32rem" }}
      w={{ base: "24rem", xl: "28rem", "2xl": "32rem" }}
      className={classes.opacity}
      id="homesvg"
    >
      <HSLayer1 />
      <HSLayer2 />
      <HSLayer3 />
    </Box>
  );
};

export default HomeSvg;
