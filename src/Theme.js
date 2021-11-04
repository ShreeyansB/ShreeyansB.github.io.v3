import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const colors = {
  primary: "#171923",
  secondary: "#EF5050",
  primaryDark: "#EDF2F7",
  alternate: "#657BEA",
  primaryAlpha: "rgba(23, 25, 35, 0.8)",
  primaryDarkAlpha: "rgba(237, 242, 247, 0.8)",
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.100", "gray.900")(props),
    },
  }),
};

const fonts = {
  heading: 'Plus Jakarta Sans',
  body: 'Inter',
}

const theme = extendTheme({ config, colors, styles , fonts});

export default theme;
