import React from "react";
import { Wrap } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const LangButtons = ({ lang }) => {
  const getLangColor = (s) => {
    switch (s) {
      case "Javascript":
        return "yellow";
      case "Go":
        return "green";
      case "Flutter":
        return "purple";
      case "HTML/CSS":
        return "teal";
      case "PHP":
        return "orange";
      case "Kotlin":
        return "pink";
      default:
    }
  };

  return (
    <Wrap mb={5} spacing={4}>
      {lang.map((item, index) => (
        <Button
          colorScheme={getLangColor(item)}
          borderRadius={10}
          size="sm"
          _focus={{ border: "none" }}
          key={`${item.id}-${index}`}
        >
          {item}
        </Button>
      ))}{" "}
    </Wrap>
  );
};

export default LangButtons;
