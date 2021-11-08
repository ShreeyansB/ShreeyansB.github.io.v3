import React from "react";
import { Box, Image, useColorMode } from "@chakra-ui/react";
import Tilt from "react-parallax-tilt";

const LoadedCard = (props) => {
  const { colorMode } = useColorMode();

  return (
    <Tilt scale={1.1}>
      <Box cursor="pointer" m={3} onClick={() => props.onClick(props.index)}>
        <Image
          src={colorMode === "light" ? props.img : props.imgDark}
          alt={props.title}
          borderRadius={20}
          draggable={false}
          _hover={{ shadow: "xl" }}
        />
      </Box>
    </Tilt>
  );
};

export default LoadedCard;
