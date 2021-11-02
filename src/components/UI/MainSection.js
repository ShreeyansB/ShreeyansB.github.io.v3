import React from "react";
import { Box } from "@chakra-ui/react";

const MainSection = (props) => {
  return (
    <Box px={{ base: "15vw", md: "17vw" }}>
      {props.children}
    </Box>
  );
};

export default MainSection;
