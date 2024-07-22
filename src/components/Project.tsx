import { Box, Button, Container, Grid, Typography } from "@mui/material"
import React from "react"
import RecipeReviewCard from "./RecipeCard";
import { ProjectData, projectdata } from "../assets/data";
import { navigateTo } from "../utils/utils";
import withRouter from "../utils/withRouter";
interface ProjectProps {
  navigate: (text: string) => void;
}

interface ProjectState {
  projectData: ProjectData[]
}


class Project extends React.PureComponent<ProjectProps, ProjectState> {
  constructor(props: ProjectProps) {
    super(props)
    this.state = {
      projectData: projectdata
    }
  }
  componentDidMount(): void {
    this.setState({ projectData: projectdata })
  }

  render() {
    return (
      <Box>
        <Container component={"section"} className="about-me" >
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 2,
            width: '100%',
          }}>
            <Typography component={"h2"} variant="h2" m={1}>Project</Typography>
            <Button onClick={() => navigateTo("/project", this.props.navigate)} variant="contained">View all</Button>
          </Box>
          <Grid container spacing={4}  className="about-me-content" >
            {
              this.state.projectData.length > 0 ? this.state.projectData.sort((a, b) => b.rating - a.rating).map((projectdata, index) => {
                if (index >= 3) return;
                return (
                  <Grid item  lg={4} md={6} sm={12} xs={12}  >
                    <RecipeReviewCard key={projectdata.id} {...projectdata} />

                  </Grid>
                )
              })
                : <Typography component={"p"} >No project found</Typography>
            }
          </Grid>
        </Container>
      </Box>

    )
  }
}

export default withRouter(Project)
