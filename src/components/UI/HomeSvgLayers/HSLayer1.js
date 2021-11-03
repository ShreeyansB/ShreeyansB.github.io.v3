import { Box } from "@chakra-ui/react";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const HSLayer1 = (props) => {

  return (
    <Box position="absolute" zIndex="1">
      <Parallax y={[5, -5]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          // width="472.851"
          // height="427.787"
          x="0"
          y="0"
          viewBox="0 0 472.851 427.787"
          // style={myStyle}
        >
          <path
            fill="none"
            stroke="#EF5050"
            strokeMiterlimit="10"
            strokeWidth="19.839"
            d="M419.234 111.8298L419.234 234.8936 419.234 355.4893 84.766 355.4893 84.766 242.0426 111.3191 242.0426 111.3191 54.6383 242.0426 54.6383 242.0426 111.8298z"
          ></path>
        </svg>
      </Parallax>
    </Box>
  );
};

export default HSLayer1;
