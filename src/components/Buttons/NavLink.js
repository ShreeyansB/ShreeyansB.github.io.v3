import { Button, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const NavLink = (props) => {
  const { colorMode } = useColorMode();
  const attributes =
    colorMode === "light"
      ? {
          _hover: {
            backgroundColor: "gray.200",
          },
          _active: {
            backgroundColor: "gray.300",
          },
        }
      : {};

  return (
    <Button
      _focus={{ boxShadow: "none" }}
      color={colorMode === "light" ? "primary" : "primaryDark"}
      variant="ghost"
      {...attributes}
    >
      <Text fontSize="lg">{props.children}</Text>
    </Button>
  );
};

export default NavLink;
