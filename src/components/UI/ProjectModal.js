import {
  Box,
  Text,
  useColorMode,
  Image,
  Heading,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Colors as colors } from "../../Colors";
import classes from "./ProjectModal.module.css";
import DBContext from "./../../context/db-context";
import LangButtons from "./LangButtons";
import TrailingButtons from "./TrailingButtons";

const ProjectModal = (props) => {
  const { colorMode } = useColorMode();

  const ctx = useContext(DBContext);
  const item = ctx.dbData.at(props.selectedItem);

  return (
    props.isModalOpen && (
      <Box
        bg={colorMode === "dark" ? colors.primary : colors.primaryDark}
        p={8}
        w={{ base: "70%", md: "35rem" }}
        h={{base: "80vh", md: undefined}}
        overflowY="auto"
        position="fixed"
        zIndex={7}
        top="10vh"
        left="50%"
        ml={{ base: "-35%", md: "-17.5rem" }}
        shadow="2xl"
        borderRadius={20}
        className={`${props.isMounted === true ? classes.fadein : null} ${
          props.isMounted === false ? classes.fadeout : null
        }`}
      >
        <Image
          src={colorMode === "light" ? item.img : item.imgDark}
          alt={item.title}
          borderRadius={10}
          width="35rem"
          draggable={false}
          mb={6}
          shadow="xl"
        />
        <LangButtons lang={item.lang} />
        <Heading fontSize="3xl" fontWeight={600} lineHeight={1.2} mb={5}>
          {item.title} - {item.subtitle}
        </Heading>
        <Text fontWeight={500} fontSize="lg" opacity={0.6} mb={6}>
          {item.description}
        </Text>
        <TrailingButtons
          source={item.source}
          live={item.live}
          onClick={props.onClick}
        />
      </Box>
    )
  );
};

export default ProjectModal;
