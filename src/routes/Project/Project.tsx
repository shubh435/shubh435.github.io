import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Project.css";
import RecipeReviewCard from "../../components/RecipeCard";
import { ProjectData, projectdata } from "../../assets/data";

interface ProjectProps {}

interface ProjectState {
  searchText: string;
  projectdata: ProjectData[];
  searchData: ProjectData[];
}

class Project extends React.Component<ProjectProps, ProjectState> {
  debounceSearch: (text: string) => void;
  constructor(props: ProjectProps) {
    super(props);
    this.state = {
      searchText: "",
      projectdata: projectdata,
      searchData: projectdata,
    };
    this.debounceSearch = this.debounce(this.performSearch, 800);
  }

  debounce = (func: (text: string) => void, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (text: string) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(text);
      }, delay);
    };
  };

  performSearch = (text: string) => {
    const searchData = projectdata.filter((project) =>
      project.projectName.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ projectdata: searchData });
  };

  handleChange = (searchText: string) => {
    this.setState({ searchText: searchText }, () =>
      this.debounceSearch(this.state.searchText)
    );
  };

  componentDidMount(): void {
    this.setState({ projectdata: projectdata });
  }

  render() {
    return (
      <Box sx={{ minHeight: "100vh", background: "black" }}>
        <Container component={"section"}>
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
                    value={this.state.searchText}
                    onChange={(event) => this.handleChange(event.target.value)}
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
            component={"section"}
          >
            {this.state.projectdata.length > 0 ? (
              this.state.projectdata
                .sort((projectA, projectB) => projectB.rating - projectA.rating)
                .map((projectdata) => (
                  <Grid key={projectdata.id} item lg={4} md={6} sm={12} xs={12}>
                    <RecipeReviewCard {...projectdata} />
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
