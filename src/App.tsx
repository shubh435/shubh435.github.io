import { ThemeProvider } from "@mui/system";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router } from "react-router-dom";

import RouteToNavigate from "./routes";
import theme from "./Theme/Theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <RouteToNavigate />
      </ThemeProvider>
    </Router>
  );
}

export default App;
