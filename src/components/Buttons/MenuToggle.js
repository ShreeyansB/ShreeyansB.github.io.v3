import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

const MenuToggle = ({ toggle, isOpen }) => {
  const { colorMode } = useColorMode();

  return (
    <Button
      _focus={{ boxShadow: "none" }}
      display={{ base: "block", md: "none" }}
      color={colorMode === "light" ? "primary" : "primaryDark"}
      variant="ghost"
      onClick={toggle}
      size="lg"
    >
      {isOpen ? <CloseIcon h={6} w={6} p={1}/> : <HamburgerIcon  h={6} w={6} strokeWidth={10}/>}
    </Button>
  );
};

export default MenuToggle;
