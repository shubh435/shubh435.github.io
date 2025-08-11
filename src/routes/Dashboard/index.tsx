import React, { useEffect } from "react";
import AboutUs from "../../components/AboutUs";
import Slider from "../../components/Slider";
import Project from "../../components/Project";
import SkillSection from "../../components/SkillSection";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Achievements from "../../components/Achievment";
import Experience from "../../components/Experience";
import { Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FreelancingPage from "../../components/FreelancingPage";

const HelmetWithChildren: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => (
  <HelmetProvider>
    <Helmet>{children}</Helmet>
  </HelmetProvider>
);

const MotionBox = motion(Box);

// Common animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Section with About + Achievements
const AboutAchievementsSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <MotionBox
      ref={ref}
      className="about-achievements-wrapper bg-zinc-900"
      initial="hidden"
      animate={controls}
      variants={fadeInUp as {}}
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "flex-start",
        gap: 4,
        padding: "2rem",
      }}
    >
      <MotionBox variants={fadeInUp as {}} sx={{ flex: 1, minWidth: "300px" }}>
        <AboutUs />
      </MotionBox>
      <MotionBox
        variants={fadeInUp as {}}
        transition={{ delay: 0.2 }}
        sx={{ flex: 1, minWidth: "300px" }}
      >
        <Achievements />
      </MotionBox>
    </MotionBox>
  );
};

const Dashboard: React.FC = () => {
  return (
    <>
      <HelmetWithChildren>
        <title>
          Shubham Sarode | Software Engineer | React Native & React JS
          Freelancer
        </title>
        <meta
          name="description"
          content="Welcome to Shubham Sarode's Portfolio – a professional React Native and React JS web developer freelancer. Expert in creating high-quality mobile and web applications tailored to your needs."
        />
        <meta
          name="keywords"
          content="Shubham Sarode,Software Engineer, React Native freelancer, React JS freelancer, web developer freelancer, mobile app developer, React developer for hire"
        />
        <meta name="author" content="Shubham Sarode" />
        <link rel="canonical" href="https://shubh435.github.io/" />

        {/* Open Graph for Facebook / LinkedIn */}
        <meta
          property="og:title"
          content="Shubham Sarode | Software Engineer | React Native & React JS Freelancer"
        />
        <meta
          property="og:description"
          content="React Native and React JS web developer freelancer. View my portfolio, skills, and projects, and hire me for your next app or web project."
        />
        <meta property="og:url" content="https://shubh435.github.io/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://shubh435.github.io/shubham-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shubham Sarode | React Native & React JS Freelancer"
        />
        <meta
          name="twitter:description"
          content="Freelancer specializing in React Native mobile apps and React JS web development. See my portfolio."
        />
        <meta
          name="twitter:image"
          content="https://shubh435.github.io/shubham-image.jpg"
        />

        {/* Schema Markup for SEO */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Shubham Sarode",
        "jobTitle": "React Native and React JS Freelancer",
        "url": "https://shubh435.github.io",
        "sameAs": [
          "https://www.linkedin.com/in/shubham-sarode/",
          "https://github.com/shubh435"
        ]
      }
    `}
        </script>
      </HelmetWithChildren>

      <Slider />
      <AboutAchievementsSection />
      <Experience />
      <SkillSection />
      <MotionBox
        variants={fadeInUp as {}}
        initial="hidden"
        whileInView="visible"
      >
        <FreelancingPage />
      </MotionBox>
      <Project />
    </>
  );
};

export default Dashboard;
