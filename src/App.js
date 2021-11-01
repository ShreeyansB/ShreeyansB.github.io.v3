import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/UI/Header";
import theme from "./Theme";

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
    </ChakraProvider>
  );
}

export default App;
