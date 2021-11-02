import { Box } from "@chakra-ui/react";
import React from "react";
import HomeSvg from "./HomeSvg";

const HomeBanner = () => {
  return (
    <Box position="relative" display={{base: "none", lg: "block"}}>
      <HomeSvg svgHeight={500} />
    </Box>
  );
};

export default HomeBanner;
