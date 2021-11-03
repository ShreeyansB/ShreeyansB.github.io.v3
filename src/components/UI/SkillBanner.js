import React from "react";
import { Flex, Text, Heading, Box, useColorMode } from "@chakra-ui/react";
import SkillGrid from "./SkillGrid";
import FadeUpAnim from "./../Animations/FadeUpAnim";
import { colors } from "./../../Theme";

const SkillBanner = (props) => {
  const { colorMode } = useColorMode();

  const nameColor = colorMode === "dark" ? colors.secondary : colors.alternate;

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      justify="space-between"
      mt="30vh"
    >
      <Box flexShrink={0} pe={10}>
        <FadeUpAnim index={0} delay={1.3}>
          <Text fontSize="2xl" fontWeight="500" ps="2px">
            Here are few
          </Text>
        </FadeUpAnim>
        <FadeUpAnim index={1} delay={1.3}>
          <Heading size="2xl" color={nameColor}>
            Technologies
          </Heading>
        </FadeUpAnim>
        <FadeUpAnim index={2} delay={1.3}>
          <Text fontSize="2xl" fontWeight="500" ps="2px" mt="7px">
            which I've been working with.
          </Text>
        </FadeUpAnim>
      </Box>
      <FadeUpAnim index={3} delay={1.3}>
        <SkillGrid />
      </FadeUpAnim>
    </Flex>
  );
};

export default SkillBanner;
