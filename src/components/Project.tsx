import { Box, Button, Container, Typography } from "@mui/material"
import React from "react"
import { styled } from '@mui/material/styles';
import RecipeReviewCard from "./RecipeCard";
import { ProjectData, projectdata } from "../assets/data";
interface ProjectProps {}

interface ProjectState {
  projectData:ProjectData[]
}




class Project extends React.Component<ProjectProps, ProjectState> {
  constructor(props: ProjectProps) {
    super(props)
    this.state = {
      projectData:projectdata
    }
  }
  render() {
    return (
      <Box>
        <Container component={"section"} className="about-me" >
     <Box  sx={{
        display:'flex',
        justifyContent: 'space-between',
        marginBottom:2
      }}>
     <Typography component={"h2"} variant="h2" m={1}>Project</Typography>
    <Button variant="contained">View all</Button>
     </Box>
        <Box className="about-me-content" width={"100%"} sx={{display:'flex',flexWrap:"wrap",justifyContent:"space-between", gap:4}} >
          {
            this.state.projectData.length>0?this.state.projectData.splice(0,3).map(projectdata =>(
              <RecipeReviewCard {...projectdata} />
            ))
            :  <Typography component={"p"} >No project found</Typography>
          }
        </Box>
      </Container>
      </Box>
      
    )
  }
}

export default Project
