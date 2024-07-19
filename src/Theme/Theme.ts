/** @format */

import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  typography: {
    fontFamily: "Domine",
    h1: {
      fontSize: "26px",
      fontWeight: 700,
      fontFamily: "Domine",
      fontStyle: "normal",
    },
    h2: {
      fontFamily: "Domine",
      fontSize: "22px",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Domine",
      fontSize: "18px",
      fontWeight: 500,
    },
    h4: {
      fontFamily: "Domine",
      fontSize: "16px",
      fontWeight: 400,
      LineHeight: "28px",
    },
    h5: {
      fontFamily: "Domine",
      fontSize: "14px",
      fontWeight: 400,
      LineHeight: "24px",
    },
    h6: {
      fontFamily: "Montserrat Alternates",
      fontSize: "12px",
      fontWeight: 600,
      LineHeight: "28px",
    },
    caption: {
      fontFamily: "Fall in love",
      fontWeight: 400,
      lineHeight: "50px",
      fontStyle: "normal",
    },
    button: {
      fontFamily: "Domine",
      fontSize: "18px",
      fontWeight: 500,
    },
  },

  palette: {
    mode: "light",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  
  },
});
const theme = {
  ...defaultTheme,
};
export default theme;
