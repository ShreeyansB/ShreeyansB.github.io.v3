import { SimpleGrid, useColorMode } from "@chakra-ui/react";
import React from "react";
import SkillButton from "../Buttons/SkillButton";
import AiSVGIcon from "../SVG/ai";
import { Colors as colors } from "../../Colors";
import DartSVGIcon from "./../SVG/dart";
import GoSVGIcon from "./../SVG/go";
import PsSVGIcon from "./../SVG/ps";
import CppSVGIcon from "./../SVG/cpp";
import CssSVGIcon from "./../SVG/css";
import FlutterSVGIcon from "./../SVG/flutter";
import GitSVGIcon from "./../SVG/git";
import HtmlSVGIcon from "./../SVG/html";
import JavaSVGIcon from "./../SVG/java";
import JsSVGIcon from "./../SVG/js";
import ReactSVGIcon from "./../SVG/react";

const SkillGrid = (props) => {
  const { colorMode } = useColorMode();

  const color =
    colorMode === "light"
      ? { fill: colors.primary, stroke: colors.primary }
      : { fill: colors.primaryDark, stroke: colors.primaryDark };

  return (
    <SimpleGrid
      columns={4}
      gap={{ base: 10, md: 10, lg: 10 }}
      maxW="23rem"
      mt={{ base: 14, lg: 0 }}
    >
      <SkillButton label="C/C++" url="https://isocpp.org/">
        <CppSVGIcon myStyle={color} />
      </SkillButton>

      <SkillButton label="HTML" url="https://html.com/">
        <HtmlSVGIcon myStyle={color} />
      </SkillButton>
      <SkillButton
        label="CSS"
        url="https://www.w3.org/Style/CSS/Overview.en.html"
      >
        <CssSVGIcon myStyle={color} />
      </SkillButton>
      <SkillButton label="Git" url="https://git-scm.com/">
        <GitSVGIcon myStyle={color} />
      </SkillButton>
      <SkillButton
        label="Adobe Illustrator"
        url="https://www.adobe.com/in/products/illustrator.html"
      >
        <AiSVGIcon myStyle={color} />
      </SkillButton>
      <SkillButton label="Javascript" url="https://www.javascript.com/">
        <JsSVGIcon myStyle={color} />
      </SkillButton>
      <SkillButton label="Go" url="https://golang.org/">
        <GoSVGIcon myStyle={color} />
      </SkillButton>
      <SkillButton
        label="Adobe Photoshop"
        url="https://www.adobe.com/in/products/photoshop.html"
      >
        <PsSVGIcon myStyle={color} />
      </SkillButton>

      <SkillButton label="Dart" url="https://dart.dev/">
        <DartSVGIcon myStyle={color} />
      </SkillButton>

      <SkillButton label="Java" url="https://www.java.com/en/">
        <JavaSVGIcon myStyle={color} />
      </SkillButton>

      <SkillButton label="React" url="https://reactjs.org/">
        <ReactSVGIcon myStyle={color} />
      </SkillButton>
      <SkillButton label="Flutter" url="https://flutter.dev/">
        <FlutterSVGIcon myStyle={color} />
      </SkillButton>
    </SimpleGrid>
  );
};

export default SkillGrid;
