import { Button, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const NavLink = (props) => {
  const { colorMode } = useColorMode();

  return (
    <Button
      _focus={{ boxShadow: "none" }}
      color={colorMode === "light" ? "primary" : "primaryDark"}
      variant="ghost"
    >
      <Text fontSize="lg">{props.children}</Text>
    </Button>
  );
};

export default NavLink;
