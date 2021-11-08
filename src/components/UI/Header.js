import { Stack, Box, Flex, useColorMode } from "@chakra-ui/react";
import classes from "./Header.module.css";
import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import MenuToggle from "../Buttons/MenuToggle";
import NavLink from "./../Buttons/NavLink";
import LogoSvg from "./LogoSvg";
import TopDownAnim from "../Animations/TopDownAnim";
import { Colors as colors } from "../../Colors";
import Scroll, { Link } from "react-scroll";

const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  var scroll = Scroll.animateScroll;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const headerStyle = {
    zIndex: 5,
    position: "sticky",
    top: 0,
    backgroundColor:
      colorMode === "light" ? colors.primaryDarkAlpha : colors.primaryAlpha,
  };

  const scrollToTopHandler = () => {
    scroll.scrollToTop({
      duration: 700,
    });
  };

  const scrollToBottomHandler = () => {
    scroll.scrollToBottom({
      duration: 800,
    });
  };

  const contactHandler = () => {
    scrollToBottomHandler();
    setTimeout(() => {
      props.popfunc();
    }, 800);
  };

  return (
    <nav style={headerStyle}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        py={7}
        px={{ base: "20px", md: "12vw" }}
        ps={{ base: "28px", md: undefined }}
        color={["white", "white", "primary.700", "primary.700"]}
      >
        <Box cursor="pointer" onClick={scrollToTopHandler}>
          <LogoSvg height="3rem" />
        </Box>

        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
          className={isOpen ? classes.show : undefined}
        >
          <Stack
            spacing={3}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <TopDownAnim index={0}>
              <NavLink onClick={scrollToTopHandler}>Home</NavLink>
            </TopDownAnim>
            <TopDownAnim index={1}>
              <Link to="skills" smooth={true} duration={700} offset={-150}>
                <NavLink>Skills</NavLink>
              </Link>
            </TopDownAnim>

            <TopDownAnim index={2}>
              <Link to="projects" smooth={true} duration={700} offset={-150}>
                <NavLink>Projects</NavLink>
              </Link>
            </TopDownAnim>

            <TopDownAnim index={3}>
              <NavLink onClick={contactHandler}>Contact</NavLink>
            </TopDownAnim>
            <TopDownAnim index={4}>
              <DarkModeSwitch
                checked={colorMode === "dark"}
                onChange={toggleColorMode}
                sunColor={colors.primary}
                moonColor={colors.primaryDark}
                size={22}
                style={{ marginLeft: "10px" }}
              />
            </TopDownAnim>
          </Stack>
        </Box>
      </Flex>
    </nav>
  );
};

export default Header;
