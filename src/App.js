import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/UI/Header";
import HomeBanner from "./components/UI/HomeBanner";
import MainSection from "./components/UI/MainSection";
import theme from "./Theme";
import { ParallaxProvider } from "react-scroll-parallax";
import Fonts from "./Fonts";
import SkillBanner from "./components/UI/SkillBanner";
import Footer from "./components/UI/Footer";
import { useState } from "react";
import ProjectsBanner from "./components/UI/ProjectsBanner";
import DBContext from "./context/db-context";
import { AnimateSharedLayout } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const [dbData, setDbData] = useState([]);

  console.log("poo");
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <ParallaxProvider>
        <Header popfunc={open} />
        <AnimateSharedLayout type="crossfade">
          <DBContext.Provider value={{ dbData, setDbData }}>
            <MainSection>
              <HomeBanner />
              <SkillBanner />
              <ProjectsBanner />
            </MainSection>
          </DBContext.Provider>
        </AnimateSharedLayout>
        <Footer popState={{ isOpen: isOpen, onClose: close }} />
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default App;
