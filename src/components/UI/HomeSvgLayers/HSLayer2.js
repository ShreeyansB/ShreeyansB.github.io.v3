import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import { colors } from "../../../Theme";

const HSLayer2 = (props) => {
  const { colorMode } = useColorMode();

  const myStyle = {
    width: props.w,
    height: props.h,
    viewBox: `0 0 ${props.w} ${props.h}`,
  };

  return (
    <Box position="absolute" zIndex="2">
      <Parallax y={[-10, 10]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="472.851"
          height="427.787"
          x="0"
          y="0"
          viewBox="0 0 472.851 427.787"
          style={myStyle}
        >
          <path
            fill={colorMode === "light" ? colors.primary : colors.primaryDark}
            d="M211.549 57.577c-18.875 37.947-67.255 62.01-91.25 80.787-21.959 17.192-61.264 62.31-60.08 93.99 1.18 31.692 25.252 63.204 56.846 65.849 13.75 1.146 27.505-2.915 41.269-1.978 44.058 3.008 68.599 52.423 107.334 73.613 44.648 24.425 101.547 7.15 142.855-22.568 26.271-18.899 49.913-43.971 58.281-75.232 8.364-31.257-2.485-69.121-30.97-84.476-25.668-13.837-64.76-11.807-74.754-39.195-6.996-19.15 6.643-39.17 9.708-59.326 4.796-31.58-19.227-63.015-49.676-72.67-30.453-9.65-64.572-.527-90.795 17.72-7.866 5.467-13.972 13.85-18.768 23.486"
          ></path>
        </svg>
      </Parallax>
    </Box>
  );
};

export default HSLayer2;
