import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';


const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const colors = {
  primary: "#2F2F33",
  secondary: "#EF5050",
  primaryDark: "#EDF2F7",
  alternate: "#657BEA"
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
