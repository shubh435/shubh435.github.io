import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Project.css";
import RecipeReviewCard from "../../components/RecipeCard";
import { projectdata } from "../../assets/data";

interface ProjectProps {}

interface ProjectState {}

class Project extends React.Component<ProjectProps, ProjectState> {
  constructor(props: ProjectProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Box sx={{ minHeight: "100vh", background: "black" }}>
        <Container>
          <Box
            sx={{ display: "flex", justifyContent: "center", paddingTop: "4%" }}
          >
            <div className="card">
              <div className="border-light">
                <div className="input-content">
                  <div className="light">
                    <span className="clip-container"></span>
                  </div>
                  <div className="search-icon">
                    <svg
                      className="svg"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="text"
                    className="input"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
          </Box>
          <Grid
            container
            spacing={4}
            className="about-me-content"
            sx={{ py: "5%" }}
          >
            {projectdata.length > 0 ? (
              projectdata
                .sort((projectA, projectB) => projectB.rating - projectA.rating)
                .map((projectdata) => (
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                    <RecipeReviewCard key={projectdata.id} {...projectdata} />
                  </Grid>
                ))
            ) : (
              <Typography component={"p"}>No project found</Typography>
            )}
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default Project;
