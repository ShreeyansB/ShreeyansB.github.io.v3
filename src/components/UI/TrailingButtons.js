import React from "react";
import { Flex, Wrap, Button } from "@chakra-ui/react";
import { Colors as colors } from "../../Colors";

const TrailingButtons = (props) => {
  const openLink = (link) => {
    window.open(link, "_blank").focus();
  };

  const itemProps = {
    color: colors.primaryDark,
    bg: colors.alternate,
    _focus: { border: "none" },
    _hover: { bg: "purple.500" },
    _active: { bg: "purple.600" },
  };

  const closeProps = {
    color: colors.primaryDark,
    bg: colors.secondary,
    _focus: { border: "none" },
    _hover: { bg: "pink.500" },
    _active: { bg: "pink.600" },
  };

  return (
    <Flex direction="row" justify="space-between" align="flex-end">
      <Wrap spacing={5}>
        {props.source && (
          <Button {...itemProps} onClick={() => openLink(props.source)}>Source</Button>
        )}
        {props.live && (
          <Button  {...itemProps} onClick={() => openLink(props.live)}>Live</Button>
        )}
      </Wrap>
      <Button {...closeProps} onClick={props.onClick}>
        Close
      </Button>
    </Flex>
  );
};

export default TrailingButtons;
