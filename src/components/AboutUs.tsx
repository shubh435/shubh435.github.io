import { Box, Typography } from "@mui/material"
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
      <Box>
        <Box>
          <Typography>About Me</Typography>
        </Box>
        <Box>
          <Typography>
          Software Engineer with 2.5+ years of experience
          in front-end development, seeking full-time front-end roles.
          </Typography>
        </Box>
      </Box>
    )
  }
}

export default AboutUs
