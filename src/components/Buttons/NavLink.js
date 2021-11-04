import { Button, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const NavLink = (props) => {
  const { colorMode } = useColorMode();
  const attributes =
    colorMode === "light"
      ? {
          _hover: {
            backgroundColor: "blackAlpha.50",
          },
          _active: {
            backgroundColor: "blackAlpha.200",
          },
        }
      : {};

  return (
    <Button
      _focus={{ boxShadow: "none" }}
      color={colorMode === "light" ? "primary" : "primaryDark"}
      variant="ghost"
      {...attributes}
      display="inline-block"
      onClick={props.onClick}
    >
      <Text fontSize="lg" px={2}>{props.children}</Text>
    </Button>
  );
};

export default NavLink;
