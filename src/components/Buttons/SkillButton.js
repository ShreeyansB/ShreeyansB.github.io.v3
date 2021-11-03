import { Box, Tooltip } from "@chakra-ui/react";
import React from "react";
import classes from "./SkillButton.module.css";

const SkillButton = (props) => {
  const openLink = () => {
    window.open(props.url, "_blank").focus();
  };

  return (
    <Tooltip label={props.label} cursor="pointer" >
      <Box cursor="pointer" className={classes.animate} onClick={openLink}>
        {props.children}
      </Box>
    </Tooltip>
  );
};

export default SkillButton;
