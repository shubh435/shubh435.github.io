/** @format */

import { createTheme } from "@mui/material/styles";

// Dark Theme
const darkTheme = createTheme({
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
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
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

// Light Theme
const lightTheme = createTheme({
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
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000000",
      secondary: "#757575",
    },
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

export { darkTheme, lightTheme };