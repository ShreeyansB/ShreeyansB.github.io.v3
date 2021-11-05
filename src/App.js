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

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <ParallaxProvider>
        <Header popFunc={open} />
        <MainSection>
          <HomeBanner />
          <SkillBanner />
        </MainSection>
        <Footer popState={{ isOpen: isOpen, onClose: close }} />
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default App;
