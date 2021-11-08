import React from "react";
import { Box } from "@chakra-ui/react";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return (
    props.isModalOpen && (
      <Box
        position="fixed"
        bg="blackAlpha.700"
        w="100%"
        h="100%"
        top={0}
        left={0}
        zIndex={6}
        onClick={props.onClick}
        className={`${props.isMounted === true ? classes.fadein : null} ${
          props.isMounted === false ? classes.fadeout : null
        }`}
      />
    )
  );
};

export default Backdrop;
