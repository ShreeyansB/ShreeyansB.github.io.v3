import React from "react";
import { Box } from "@chakra-ui/react";

const MainSection = (props) => {
  return (
    <Box px={{ base: "10vw", md: "12vw" }}>
      {props.children}
    </Box>
  );
};

export default MainSection;
