import { Box, Flex, Heading, Text, useColorMode, Wrap } from "@chakra-ui/react";
import React from "react";
import HomeSvg from "./HomeSvg";
import { Colors as colors } from "../../Colors";
import FadeUpAnim from "../Animations/FadeUpAnim";
import HomeButton from "../Buttons/HomeButton";
import { DownloadIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";

const HomeBanner = () => {
  const { colorMode } = useColorMode();

  const nameColor = colorMode === "light" ? colors.secondary : colors.alternate;

  const openResumeHandler = () => {
    window.open("./Resume_redacted.pdf", "_blank").focus();
  };

  return (
    <Flex direction="row" justify="space-between" align="center" mt="7rem">
      <Box>
        <FadeUpAnim index={0} delay={0.7}>
          <Text fontSize="2xl" fontWeight="500" ps="2px">
            Hello! I am,
          </Text>
        </FadeUpAnim>
        <FadeUpAnim index={1} delay={0.7}>
          <Heading size="2xl" color={nameColor}>
            Shreeyans Bahadkar,
          </Heading>
        </FadeUpAnim>
        <FadeUpAnim index={2} delay={0.7}>
          <Text fontSize="2xl" fontWeight="500" ps="2px" mt={5}>
            A Full Stack Developer from Thane, IN <br />
            crafting robust & beautiful apps and websites. <br />
            Experienced in Cross Platform Development & Graphic Design.
          </Text>
        </FadeUpAnim>
        <FadeUpAnim index={3} delay={0.7}>
          <Wrap spacing={7} mt={5}>
            <Link to="skills" smooth={true} duration={700}>
              <HomeButton>Know More</HomeButton>
            </Link>
            <HomeButton
              variant="outline"
              leftIcon={<DownloadIcon />}
              onClick={openResumeHandler}
            >
              Resume
            </HomeButton>
          </Wrap>
        </FadeUpAnim>
      </Box>
      <Box display={{ base: "none", lg: "block" }}>
        <HomeSvg />
      </Box>
    </Flex>
  );
};

export default HomeBanner;
