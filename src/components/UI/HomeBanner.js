import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import HomeSvg from "./HomeSvg";
import { colors } from "./../../Theme";
import FadeUpAnim from "../Animations/FadeUpAnim";

const HomeBanner = () => {
  const { colorMode } = useColorMode();

  const nameColor = colorMode === "light" ? colors.secondary : colors.alternate;

  return (
    <Flex direction="row" justify="space-between" align="center" mt="7rem">
      <Box>
        <FadeUpAnim index={0}>
          <Text fontSize="2xl" fontWeight="500" ps="2px">
            Hello! I am,
          </Text>
        </FadeUpAnim>
        <FadeUpAnim index={1}>
          <Heading size="2xl" color={nameColor}>
            Shreeyans Bahadkar,
          </Heading>
        </FadeUpAnim>
        <FadeUpAnim index={2}>
          <Text fontSize="2xl" fontWeight="500" ps="2px" mt={5}>
            A Full Stack Developer from Thane, IN <br />
            crafting robust & beautiful apps and websites. <br />
            Experienced in Cross Platform Develpment & Graphic Design.
          </Text>
        </FadeUpAnim>
      </Box>
      <Box display={{ base: "none", lg: "block" }}>
        <HomeSvg />
      </Box>
    </Flex>
  );
};

export default HomeBanner;
