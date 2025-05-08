/** @format */

import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  typography: {
    fontFamily: "Bai Jamjuree",
    h1: {
      fontSize: "22px",
      fontWeight: 700,
      fontFamily: "Bai Jamjuree",
      fontStyle: "normal",
    },
    h2: {
      fontFamily: "Bai Jamjuree",
      fontSize: "20px",
      fontWeight: 700,
      textTransform: "capitalize",
    },
    h3: {
      fontFamily: "Bai Jamjuree",
      fontSize: "18px",
      fontWeight: 700,
      textTransform: "capitalize",
    },
    h4: {
      fontFamily: "Bai Jamjuree",
      fontSize: "16px",
      fontWeight: 400,
    },
    h5: {
      fontFamily: "Bai Jamjuree",
      fontSize: "14px",
      fontWeight: 400,
      textTransform: "capitalize",
    },
    h6: {
      fontFamily: "monospace",
      fontSize: "13px",
      fontWeight: 400,
    },
    caption: {
      fontFamily: "monospace",
      fontWeight: 400,
      fontSize: "18px",
      fontStyle: "normal",
    },
    body2: {
      fontFamily: "monospace",
      fontWeight: 400,
      fontSize: "14px",
      fontStyle: "normal",
    },
    body1: {
      fontFamily: "Bai Jamjuree",
      fontSize: "14px",
      fontWeight: 500,
      textTransform: "capitalize",
    },
    button: {
      fontFamily: "Bai Jamjuree",
      fontSize: "18px",
      fontWeight: 500,
      textTransform: "capitalize",
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


