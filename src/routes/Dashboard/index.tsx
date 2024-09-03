import React from "react";
import AboutUs from "../../components/AboutUs";
import Slider from "../../components/Slider";
import Project from "../../components/Project";
import SkillSection from "../../components/SkillSection";
import { Helmet } from "react-helmet";
interface DashboardProps {}

interface DashboardState {}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
       <Helmet>
          <title>Shubham Sarode | Software Engineer</title>
          <meta
            name="description"
            content="Welcome to Shubham Sarode's portfolio. Explore projects, skills, and professional journey of a Software Engineer specializing in React, React Native, and web development."
          />
          <meta
            name="keywords"
            content="Shubham Sarode, Software Engineer, React, React Native, Web Development, Portfolio"
          />
          <meta name="author" content="Shubham Sarode" />
          <link rel="canonical" href="https://shubh435.github.io/" />
          <meta property="og:title" content="Shubham Sarode | Software Engineer" />
          <meta property="og:description" content="Explore the professional portfolio of Shubham Sarode, a Software Engineer with expertise in React, React Native, and web development." />
          <meta property="og:url" content="https://shubh435.github.io/" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://shubh435.github.io/shubham-image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Shubham Sarode | Software Engineer" />
          <meta name="twitter:description" content="Explore the professional portfolio of Shubham Sarode, specializing in web and mobile app development." />
          <meta name="twitter:image" content="https://shubh435.github.io/shubham-image.jpg" />
        </Helmet>

        <Slider />
        <AboutUs />
        <SkillSection />
        <Project />
      </>
    );
  }
}

export default Dashboard;
