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
    const sortedArray = this.state.projectData.sort(
      (item1, item2) => item2.rating - item1.rating
    );
    return (
      <section
        className={`bg-transparent back-imag-setup
       bg-fixed bg-center bg-no-repeat bg-cover py-4 m-0`}
      >
        <Container component={"section"} className="about-me">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: 2,
              marginBottom: 2,
              width: "100%",
              alignItems: { md: "center" },
            }}
          >
            <div className="space-y-1">
              <Typography
                component={"h2"}
                className="text-white"
                variant="h2"
                m={1}
              >
                My Projects
              </Typography>
            </div>
            <Button
              onClick={() => navigateTo("/project", this.props.navigate)}
              variant="contained"
              sx={{
                borderRadius: "999px",
                textTransform: "none",
                px: 3,
                py: 1.2,
                background:
                  "linear-gradient(135deg, #06b6d4 0%, #2563eb 60%, #7c3aed 100%)",
              }}
            >
              View all projects
            </Button>
          </Box>
          <Grid container spacing={4} className="about-me-content">
            {this.state.projectData.length > 0 ? (
              sortedArray.slice(0, 3).map((projectdata) => {
                return (
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                    <ThreeDCard
                      {...projectdata}
                      title={projectdata.projectName}
                      description={projectdata.description}
                      imageUrl={projectdata.projectImage}
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
