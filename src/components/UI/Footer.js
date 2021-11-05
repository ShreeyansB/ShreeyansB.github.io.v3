import {
  Flex,
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverCloseButton,
  Text,
  Stack,
  Box,
  useColorMode,
  PopoverContent,
} from "@chakra-ui/react";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { colors } from "./../../Theme";
import classes from "./Footer.module.css";

const Footer = (props) => {
  const { colorMode } = useColorMode();

  const myProps = {
    color: colorMode === "light" ? colors.primaryDark : colors.primary,
    fontWeight: 600,
  };

  return (
    <Flex justify="space-between" bg="#595FD9" p={4} align="center">
      <Stack direction="row" spacing={0} {...myProps}>
        <Text fontSize="1.6rem">&copy;</Text>
        <Box pt="5.5px">
          <Text w={{ base: "8rem", md: "20rem" }} isTruncated fontSize="1.16rem">
            &nbsp;Shreeyans Bahadkar — 2021
          </Text>
        </Box>
      </Stack>

      <Popover
        returnFocusOnClose={false}
        isOpen={props.popState.isOpen}
        onClose={props.popState.onClose}
        closeOnBlur={true}
        closeOnEsc={true}
      >
        <PopoverTrigger>
          <Stack direction="row" spacing={4}>
            <SocialIcon
              url="mailto:sbahadkar@rocketmail.com"
              bgColor={myProps.color}
              className={classes.social}
              target="_blank"
            />
            <SocialIcon
              url="https://www.telegram.me/ballisticswami"
              bgColor={myProps.color}
              className={classes.social}
              target="_blank"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/shreeyans-bahadkar-2b9946217/"
              bgColor={myProps.color}
              className={classes.social}
              target="_blank"
            />
            <SocialIcon
              url="https://github.com/ShreeyansB"
              bgColor={myProps.color}
              className={classes.social}
              target="_blank"
            />
          </Stack>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverCloseButton />
          <PopoverBody fontWeight={600}>
            Reach me via Email or Telegram
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default Footer;
