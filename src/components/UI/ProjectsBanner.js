import { Box } from "@chakra-ui/react";
import React, { useEffect, useContext, useState } from "react";
import FadeUpAnim from "./../Animations/FadeUpAnim";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { Colors as colors } from "../../Colors";
import ProjectsLoadingGrid from "./ProjectsLoadingGrid";
import DBContext from "./../../context/db-context";
import ProjectsGrid from "./ProjectsGrid";
import ReactDOM from "react-dom";
import ProjectModal from "./ProjectModal";
import Backdrop from "./Backdrop";

const ProjectsBanner = (props) => {
  const { colorMode } = useColorMode();

  const nameColor = colorMode === "light" ? colors.secondary : colors.alternate;

  const ctx = useContext(DBContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const openModal = (index) => {
    setSelectedItem(index);
    setIsModalOpen(true);
    setIsMounted(true);
  };

  const closeModal = () => {
    setIsMounted(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 420);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.npoint.io/32dd00a8a34f7c8a9462");
      if (response.status === 200) {
        const data = await response.json();
        ctx.setDbData(data);
      }
    }
    fetchData();
  }, []);

  return (
    <Box mt="30vh" id="projects">
      <FadeUpAnim index={0} delay={2}>
        <Text fontSize="2xl" fontWeight="500" ps="2px">
          Some
        </Text>
      </FadeUpAnim>
      <FadeUpAnim index={1} delay={2}>
        <Heading size="2xl" color={nameColor}>
          Projects
        </Heading>
      </FadeUpAnim>
      <FadeUpAnim index={2} delay={2}>
        <Text fontSize="2xl" fontWeight="500" ps="2px" mt={2}>
          which I've been working on, over the years.
        </Text>
      </FadeUpAnim>
      <FadeUpAnim index={3} delay={2}>
        <Box minH="30rem">
          {ctx.dbData.length === 0 ? (
            <ProjectsLoadingGrid />
          ) : (
            <ProjectsGrid onClick={openModal} />
          )}
        </Box>
        {ReactDOM.createPortal(
          <Backdrop
            onClick={closeModal}
            isModalOpen={isModalOpen}
            isMounted={isMounted}
          />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ProjectModal
            onClick={closeModal}
            isMounted={isMounted}
            isModalOpen={isModalOpen}
            selectedItem={selectedItem}
          />,
          document.getElementById("overlay-root")
        )}
      </FadeUpAnim>
    </Box>
  );
};

export default ProjectsBanner;
