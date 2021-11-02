import { ChakraProvider, Box } from "@chakra-ui/react";
import Header from "./components/UI/Header";
import HomeBanner from "./components/UI/HomeBanner";
import MainSection from "./components/UI/MainSection";
import theme from "./Theme";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ParallaxProvider>
        <Header />
        <MainSection>
          <HomeBanner />
          {/* {[...Array(10)].map((x, i) => (
            <Box m={15} bg="green.200" h="50vh" w="100%" />
          ))} */}
        </MainSection>
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default App;
