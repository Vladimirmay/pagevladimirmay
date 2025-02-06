import { ThemeOptions } from "@mui/material";

export const BREAKPOINT = {
  xs: 399,
  sm: 599,
  md: 959,
  lg: 1279,
};

export const DURATION = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  medium: 500,
  mediumLong: 650,
  long: 800,
  longer: 1000,
  longest: 2000,
  lingering: 4000,
  alternate: 20000,
};
const THEME: ThemeOptions = {
  typography: {
    fontFamily: '"Neutra Text", sans-serif',
  },
};

export const EASING = {
  inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
};

export default THEME;
