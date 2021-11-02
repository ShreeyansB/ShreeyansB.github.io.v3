import { Stack, Box, Flex, useColorMode } from "@chakra-ui/react";
import classes from "./Header.module.css";
import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import MenuToggle from "../Buttons/MenuToggle";
import NavLink from "./../Buttons/NavLink";
import LogoSvg from "./LogoSvg";

const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);
  return (
    <header>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        py={7}
        px={{ base: "20px", md: "16vw" }}
        color={["white", "white", "primary.700", "primary.700"]}
        {...props}
      >
        <LogoSvg height="3rem" />

        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
          className={isOpen ? classes.show : undefined}
        >
          <Stack
            spacing={5}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <NavLink>Home</NavLink>
            <NavLink>Skills</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Contact</NavLink>
            <DarkModeSwitch
              checked={colorMode === "dark"}
              onChange={toggleColorMode}
              sunColor="black"
              moonColor="white"
              size={22}
            />
          </Stack>
        </Box>
      </Flex>
    </header>
  );
};

export default Header;
