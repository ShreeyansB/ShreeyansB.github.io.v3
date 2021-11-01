import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';


const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const colors = {
  primary: "#1A202C",
  secondary: "#E53E3E",
  primaryDark: "#F7FAFC",
};

const styles = {
  global: props => ({
    body: {
      bg: mode('gray.100', 'gray.900')(props),
    },
  }),
};

const theme = extendTheme({ config, colors, styles });

export default theme;
