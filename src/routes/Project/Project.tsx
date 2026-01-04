import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Project.css";
import RecipeReviewCard from "../../components/RecipeCard";
import { ProjectData, projectdata } from "../../assets/data";
import { Search } from "@mui/icons-material";

interface ProjectProps {}

interface ProjectState {
  searchText: string;
  projectdata: ProjectData[];
  searchData: ProjectData[];
  activeFilter: string;
}

const FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
  { id: "react-native", label: "React Native" },
  { id: "typescript", label: "TypeScript" },
  { id: "current", label: "Current" },
];

class Project extends React.Component<ProjectProps, ProjectState> {
  debounceSearch: (text: string) => void;

  constructor(props: ProjectProps) {
    super(props);
    this.state = {
      searchText: "",
      projectdata: projectdata,
      searchData: projectdata,
      activeFilter: "all",
    };
    this.debounceSearch = this.debounce(this.performSearch, 400);
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
    const searchText = text.toLowerCase();
    const searchData = projectdata.filter((project) => {
      const matchesName = project.projectName.toLowerCase().includes(searchText);
      const matchesDescription = project.description.toLowerCase().includes(searchText);
      const matchesTechnology = project.technology?.toLowerCase().includes(searchText);
      const matchesTechStack = project.techStack?.some(tech =>
        tech.toLowerCase().includes(searchText)
      );
      return matchesName || matchesDescription || matchesTechnology || matchesTechStack;
    });
    this.setState({ projectdata: this.applyFilter(searchData, this.state.activeFilter) });
  };

  applyFilter = (data: ProjectData[], filter: string) => {
    if (filter === "all") return data;

    if (filter === "mobile") {
      return data.filter(p => p.category === "Mobile");
    }
    if (filter === "web") {
      return data.filter(p => p.category === "Web" || !p.category);
    }
    if (filter === "react-native") {
      return data.filter(p =>
        p.technology?.toLowerCase().includes("react native") ||
        p.techStack?.some(t => t.toLowerCase().includes("react native"))
      );
    }
    if (filter === "typescript") {
      return data.filter(p =>
        p.technology?.toLowerCase().includes("typescript") ||
        p.techStack?.some(t => t.toLowerCase().includes("typescript"))
      );
    }
    if (filter === "current") {
      return data.filter(p => p.subheader === "Current");
    }

    return data;
  };

  handleFilterChange = (filterId: string) => {
    this.setState({ activeFilter: filterId }, () => {
      const filteredData = this.applyFilter(
        this.state.searchText ? this.state.searchData : projectdata,
        filterId
      );
      this.setState({ projectdata: filteredData });
    });
  };

  handleChange = (searchText: string) => {
    this.setState({ searchText: searchText }, () =>
      this.debounceSearch(this.state.searchText)
    );
  };

  componentDidMount(): void {
    this.setState({ projectdata: projectdata, searchData: projectdata });
  }

  render() {
    const sortedArray = this.state.projectdata.sort(
      (projectA, projectB) => projectB.rating - projectA.rating
    );

    // Featured projects (top 6 by rating)
    const featuredProjects = projectdata
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6);

    return (
      <Box sx={{ minHeight: "100vh", background: "var(--bg-main)", paddingTop: "5%" }}>
        <Container component={"section"} maxWidth="xl">
          {/* Header Section */}
          <Box sx={{ textAlign: "center", marginBottom: 6 }}>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 2,
              }}
            >
              My Projects
            </Typography>
            <Typography
              sx={{
                fontSize: "1.125rem",
                color: "var(--text-muted)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Selected work showcasing mobile and web development expertise
            </Typography>
          </Box>

          {/* Featured Projects Section */}
          {this.state.searchText === "" && this.state.activeFilter === "all" && (
            <Box component="section" sx={{ marginBottom: 8 }}>
              <Typography
                component="h2"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 1,
                }}
              >
                Featured Projects
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  marginBottom: 4,
                }}
              >
                Highlighted projects with the highest impact and technical complexity
              </Typography>
              <Grid container spacing={3}>
                {featuredProjects.map((project, index) => (
                  <Grid key={`featured-${project.id}-${index}`} item lg={4} md={6} sm={12} xs={12}>
                    <RecipeReviewCard {...project} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Search Bar */}
          <Box className="search-container-modern">
            <Search className="search-icon-modern" />
            <input
              type="text"
              value={this.state.searchText}
              onChange={(event) => this.handleChange(event.target.value)}
              className="search-input-modern"
              placeholder="Search by project name, tech stack, or description..."
              aria-label="Search projects"
            />
          </Box>

          {/* Filter Pills */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              marginBottom: 6,
              justifyContent: "center",
            }}
          >
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => this.handleFilterChange(filter.id)}
                className={`filter-pill ${this.state.activeFilter === filter.id ? "active" : ""}`}
                aria-pressed={this.state.activeFilter === filter.id}
              >
                {filter.label}
              </button>
            ))}
          </Box>

          {/* All Projects Grid */}
          <Box component="section">
            <Typography
              component="h2"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 4,
              }}
            >
              {this.state.searchText
                ? `Search Results (${sortedArray.length})`
                : this.state.activeFilter !== "all"
                ? `${FILTERS.find(f => f.id === this.state.activeFilter)?.label} (${sortedArray.length})`
                : `All Projects (${sortedArray.length})`}
            </Typography>

            <Grid container spacing={4} sx={{ paddingBottom: "5%" }}>
              {this.state.projectdata.length > 0 ? (
                sortedArray.map((projectdata, index) => (
                  <Grid key={`${projectdata.id}-${index}`} item lg={4} md={6} sm={12} xs={12}>
                    <RecipeReviewCard {...projectdata} />
                  </Grid>
                ))
              ) : (
                // Empty State
                <Grid item xs={12}>
                  <Box
                    sx={{
                      textAlign: "center",
                      paddingY: 10,
                    }}
                  >
                    <Box sx={{ fontSize: "4rem", marginBottom: 2 }}>🔍</Box>
                    <Typography
                      sx={{
                        fontSize: "1.25rem",
                        color: "var(--text-primary)",
                        marginBottom: 1,
                        fontWeight: 600,
                      }}
                    >
                      No projects found
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      Try searching for "React Native", "TypeScript", or "Firebase"
                    </Typography>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>
        </Container>
      </Box>
    );
  }
}

export default Project;
