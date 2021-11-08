import { SimpleGrid } from "@chakra-ui/react";

import React from "react";
import LoadingCard from "./LoadingCard";

const ProjectsLoadingGrid = (props) => {



  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={10} mt={7}>
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </SimpleGrid>
  );
};

export default ProjectsLoadingGrid;
