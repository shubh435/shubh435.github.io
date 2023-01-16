import React from "react";
import { BrowserRouter } from "react-router-dom";

import RouteToNavigate from "./routes";

function App() {
  return (
    <BrowserRouter>
      <RouteToNavigate />
    </BrowserRouter>
  );
}

export default App;
