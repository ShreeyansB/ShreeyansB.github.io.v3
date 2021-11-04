import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../Theme";

const HomeButton = (props) => {
  const { colorMode } = useColorMode();

  const myStyle = {
    backgroundColor: colorMode === "dark" ? colors.secondary : colors.alternate,
    color: colorMode === "dark" ? colors.primary : colors.primaryDark,
  };

  const myStyleOutline = {
    borderColor: colorMode === "dark" ? colors.secondary : colors.alternate,
    borderWidth: "2px",
    borderRadius: "8px",
    color: colorMode === "dark" ? colors.secondary : colors.alternate,
  };

  const attributes =
    props.variant !== "outline"
      ? colorMode === "dark"
        ? {
            _hover: {
              backgroundColor: "#f75959 !important",
            },
            _active: {
              backgroundColor: "#fc6f56 !important",
            },
          }
        : {
            _hover: {
              backgroundColor: "#4e62cc !important",
            },
            _active: {
              backgroundColor: "#4d3fb5 !important",
            },
          }
      : {};

  return (
    <Button
      _focus={{ boxShadow: "none" }}
      size="lg"
      {...attributes}
      onClick={props.onClick}
      variant={props.variant}
      leftIcon={props.leftIcon}
      style={props.variant === "outline" ? myStyleOutline : myStyle}
    >
      {props.children}
    </Button>
  );
};

export default HomeButton;
