import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/UI/Header";
import HomeBanner from "./components/UI/HomeBanner";
import MainSection from "./components/UI/MainSection";
import theme from "./Theme";
import { ParallaxProvider } from "react-scroll-parallax";
import Fonts from "./Fonts";
import SkillBanner from "./components/UI/SkillBanner";

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <ParallaxProvider>
        <Header/>
        <MainSection>
          <HomeBanner />
          <SkillBanner />
        </MainSection>
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default App;
