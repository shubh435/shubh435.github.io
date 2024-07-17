import { Box, Container, Typography } from "@mui/material"
import React from "react"
interface AboutUsProps {}

interface AboutUsState {}

class AboutUs extends React.Component<AboutUsProps, AboutUsState> {
  constructor(props: AboutUsProps) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Container component={"section"} className="about-me" sx={{
        minHeight:300,
        display:'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <Typography component={"h2"} variant="h2">About Me</Typography>
        <Box className="about-me-content" >
          <Typography component={"p"}>
          Experienced and passionate React JS Developer with 2.6 years of hands-on experience in designing and implementing web applications. Skilled in using React JS for front-end development, Redux for state management, and proficient in integrating RESTful APIs. Recognized for delivering award-winning projects, including a Food Delivery web app built with React JS and Redux. Eager to leverage expertise in React Native for mobile development and contribute to innovative projects in a collaborative team environment.
          </Typography>
        </Box>
      </Container>
      
    )
  }
}

export default AboutUs
