import { ThemeProvider } from "@mui/system";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashRouter as Router } from "react-router-dom";

import RouteToNavigate from "./routes";
import {darkTheme,lightTheme} from "./Theme/Theme";
function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <RouteToNavigate />
      </ThemeProvider>
    </Router>
  );
}

export default App;
