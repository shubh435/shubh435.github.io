import { Box, Container, Typography } from "@mui/material";
import React from "react";
interface AboutUsProps {}

interface AboutUsState {}

class AboutUs extends React.Component<AboutUsProps, AboutUsState> {
  constructor(props: AboutUsProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Box id="about" className="bg-[#f5f5f5] w-full mb-0">
        <Container
          component={"section"}
          className="about-me "
          sx={{
            minHeight: 300,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography component={"h2"} variant="h2">
            About Me
          </Typography>
          <Box className="about-me-content">
            <Typography component={"p"}>
              I am Shubham Sarode, a Software Engineer with 4+ years of
              experience in front end development, specializing in React JS,
              React Native, and Redux. I hold a Master’s degree in Computer
              Science from North Maharashtra University and a Bachelor’s degree
              from RTMNU University. I have a strong track record in designing
              responsive web and mobile applications, improving code
              reusability, and streamlining state management. My projects
              include Parents Who Date, a React Native app for single parents,
              and Fudu, a platform blending features from Zomato and Instagram.
              Proficient in TypeScript, Jest, and Enzyme, I ensure high code
              quality and performance. Im passionate about delivering innovative
              solutions that enhance user experience and exceed client
              expectations. Lets collaborate to bring your ideas to life!
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }
}

export default AboutUs;
