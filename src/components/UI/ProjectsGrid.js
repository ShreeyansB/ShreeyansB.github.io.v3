import { SimpleGrid } from "@chakra-ui/react";

import React, { useContext } from "react";
import LoadedCard from "./LoadedCard";
import DBContext from "./../../context/db-context";
import FadeUpAnim from "../Animations/FadeUpAnim";

const ProjectsGrid = (props) => {
  const ctx = useContext(DBContext);

  return (
    <FadeUpAnim index={0} delay={0.1}>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        spacing={5}
        mt={7}
      >
        {ctx.dbData.map((item, index) => (
          <LoadedCard
            img={item.img}
            imgDark={item.imgDark}
            title={item.title}
            key={item.id}
            index={index}
            onClick={props.onClick}
          />
        ))}
      </SimpleGrid>
    </FadeUpAnim>
  );
};

export default ProjectsGrid;
