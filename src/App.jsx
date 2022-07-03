import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPage from "./Pages/BlogPage";
import HomePage from "./Pages/HomePage";
import NoPage from "./Pages/NoPage";
import ProjectPage from "./Pages/ProjectPage";
import SkillsPage from "./Pages/SkillsPage";
import VideoPage from "./Pages/VideoPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Skills" element={<SkillsPage />} />
          <Route exact path="/Projects" element={<ProjectPage />} />
          <Route exact path="/Video" element={<VideoPage />} />
          <Route exact path="/Blog" element={<BlogPage />} />
          <Route exact path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
