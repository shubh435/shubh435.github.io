import { ThemeProvider } from "@mui/system";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import RouteToNavigate from "./routes";
import theme from "./Theme/Theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RouteToNavigate />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
