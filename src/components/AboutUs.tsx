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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            expedita reiciendis autem porro deserunt necessitatibus dolor
            voluptates, perspiciatis error ex dignissimos fuga culpa? Incidunt
            labore dignissimos nesciunt sed perferendis nemo.
          </Typography>
        </Box>
      </Box>
    )
  }
}

export default AboutUs
