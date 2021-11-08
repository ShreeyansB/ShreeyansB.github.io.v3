import React from "react";
import {
  Flex,
  Text,
  Heading,
  Box,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import SkillGrid from "./SkillGrid";
import FadeUpAnim from "./../Animations/FadeUpAnim";
import { Colors as colors } from "../../Colors";
import ArrowSVG from "../SVG/arrow";

const SkillBanner = (props) => {
  const { colorMode } = useColorMode();

  const nameColor = colorMode === "dark" ? colors.secondary : colors.alternate;

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      justify="space-between"
      mt="30vh"
      id="skills"
    >
      <Box flexShrink={0} pe={10}>
        <Stack direction={{base: "row", lg: "column"}} align="flex-start">
          <Box>
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
            <Box w={{base: "3rem", lg:"22rem"}} mt={4} >
              <ArrowSVG />
            </Box>
          </FadeUpAnim>
        </Stack>
      </Box>
      <FadeUpAnim index={4} delay={1.3}>
        <SkillGrid />
      </FadeUpAnim>
    </Flex>
  );
};

export default SkillBanner;
