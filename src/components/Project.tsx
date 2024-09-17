import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ProjectData, projectdata } from "../assets/data";
import { navigateTo } from "../utils/utils";
import withRouter from "../utils/withRouter";
import ThreeDCard from "./ThreeJS3DCard";
import "./LampEffect.css";

interface ProjectProps {
  navigate: (text: string) => void;
}

interface ProjectState {
  projectData: ProjectData[];
}

class Project extends React.PureComponent<ProjectProps, ProjectState> {
  constructor(props: ProjectProps) {
    super(props);
    this.state = {
      projectData: projectdata,
    };
  }
  componentDidMount(): void {
    this.setState({ projectData: projectdata });
  }

  render() {
    const sortedArray = this.state.projectData.sort((item1, item2) => item2.rating - item1.rating)
    return (
      <section
        className={`bg-transparent back-imag-setup
       bg-fixed bg-center bg-no-repeat bg-cover py-4 m-0`}
      >
        <Container component={"section"} className="about-me">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 2,
              width: "100%",
            }}
          >
            <Typography
              component={"h2"}
              className="text-white"
              variant="h2"
              m={1}
            >
              Project
            </Typography>
            <Button
              onClick={() => navigateTo("/project", this.props.navigate)}
              variant="contained"
            >
              View all
            </Button>
          </Box>
          <Grid container spacing={4} className="about-me-content" >
            {this.state.projectData.length > 0 ? (
              sortedArray.slice(0,3).map((projectdata, index) => {
                  return (
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                      <ThreeDCard
                        {...projectdata}
                        title={projectdata.projectName}
                        description={projectdata.description}
                        imageUrl={projectdata.porjectImage}
                      />
                    </Grid>
                  );
                })
            ) : (
              <Typography component={"p"}>No project found</Typography>
            )}
          </Grid>
        </Container>
      </section>
    );
  }
}

export default withRouter(Project);
