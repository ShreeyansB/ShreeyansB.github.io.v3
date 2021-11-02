import { Box } from "@chakra-ui/react";
import React from "react";
import HSLayer1 from "./HomeSvgLayers/HSLayer1";
import HSLayer2 from "./HomeSvgLayers/HSLayer2";
import HSLayer3 from "./HomeSvgLayers/HSLayer3";

const HomeSvg = (props) => {
  const height = props.svgHeight;
  const ratio = 472.851 / 427.787;
  const getWidth = (height) => ratio * height;

  const myStyle = {
    width: getWidth(height),
    height: height,
    viewBox: `0 0 ${getWidth(height)} ${height}`,
  };

  return (
    <Box h={height}>
      <HSLayer1 w={myStyle.width} h={myStyle.height} />
      <HSLayer2 w={myStyle.width} h={myStyle.height} />
      <HSLayer3 w={myStyle.width} h={myStyle.height} />
    </Box>
  );
};

export default HomeSvg;
