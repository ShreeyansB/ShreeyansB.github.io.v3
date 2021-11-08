import React from "react";
import { Box, Skeleton, useColorMode } from "@chakra-ui/react";

const LoadingCard = (props) => {
  const { colorMode } = useColorMode();

  const boxProps = {
    bg: colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.50",
  };
  const skeleProps = {
    startColor: colorMode === "light" ? "blackAlpha.200" : "whiteAlpha.100",
    endColor: colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.300",
  };

  const myStyle = {
    height: "7rem",
    width: "auto",
    backgroundColor: "gray",
    borderRadius: 10,
  };

  const myStyleSub = {
    height: "2rem",
    width: "auto",
    backgroundColor: "gray",
    borderRadius: 10,
    marginTop: "1rem",
  };

  return (
    <Box borderRadius={20} p={5} {...boxProps} cursor="not-allowed" >
      <Skeleton style={myStyle} {...skeleProps}/>
      <Skeleton style={myStyleSub} me="8rem" {...skeleProps}/>
      <Skeleton style={myStyleSub} {...skeleProps}/>
      <Skeleton style={myStyleSub} me={20} {...skeleProps}/>
    </Box>
  );
};

export default LoadingCard;
