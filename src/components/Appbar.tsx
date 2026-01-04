import * as React from "react";
import {
  Typography,
  Toolbar,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  IconButton,
  Drawer,
  Divider,
  Box,
  AppBar,
  Container,
  Button,
} from "@mui/material";
import { Theme } from "@mui/system";
import { withStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import withRouter from "../utils/withRouter";
import { navigateTo } from "../utils/utils";
import ThemeToggle from "./ThemeToggle";
interface DrawerAppBarProps {
  window?: () => Window;
  classes?: any;
  navigate: (text: string) => void;
}

interface DrawerAppBarState {
  mobileOpen: boolean;
  isScrolled: boolean;
}

const drawerWidth = 240;
const navItems = [
  { id: 1, name: "Home", routes: "/#" },
  { id: 2, name: "About Me", routes: "#about" },
  { id: 3, name: "Skills", routes: "#skill" },
  { id: 4, name: "Projects", routes: "/project" },
  { id: 5, name: "Contact", routes: "#footer" },
];

class DrawerAppBar extends React.PureComponent<
  DrawerAppBarProps,
  DrawerAppBarState
> {
  constructor(props: DrawerAppBarProps) {
    super(props);
    this.state = {
      mobileOpen: false,
      isScrolled: false,
    };
  }

  componentDidMount(): void {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentWillUnmount(): void {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const hasScrolled = window.scrollY > 30;
    if (hasScrolled !== this.state.isScrolled) {
      this.setState({ isScrolled: hasScrolled });
    }
  };

  handleDrawerToggle = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen,
    });
  };

  navigateTo = (routes: string) => {
    navigateTo(routes, this.props.navigate);
  };
  drawer = (
    <Box onClick={this.handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "var(--text-primary)" }}>
        SSS
      </Typography>
      <Divider sx={{ borderColor: "var(--border-subtle)" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => this.navigateTo(item.routes)}
            >
              <ListItemText
                sx={{ color: "var(--text-primary)" }}
                primary={item.name}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <Button
            onClick={() =>
              navigateTo(
                "https://drive.google.com/uc?export=download&id=1jj2iw1bHdgiWZ-DPCCIwxll1guDj43VK",
                this.props.navigate
              )
            }
            variant="contained"
            fullWidth
            sx={{
              background: "var(--accent-gradient)",
              borderRadius: "999px",
              textTransform: "none",
            }}
          >
            Download Resume
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  render() {
    const { classes } = this.props;
    const { isScrolled } = this.state;
    return (
      <Box
        sx={{
          display: "flex",
          background: "transparent",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <AppBar
          className={classes.appbarBackground}
          component="nav"
          position="fixed"
          sx={{
            backgroundColor: isScrolled
              ? "var(--bg-surface) !important"
              : "transparent !important",
            backdropFilter: isScrolled ? "blur(22px)" : "none",
            boxShadow: isScrolled ? "var(--shadow-md)" : "none",
            borderBottom: isScrolled
              ? "1px solid var(--border-subtle)"
              : "transparent",
            transition: "all 0.3s ease",
          }}
        >
          <Container>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={this.handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h1"
                component="div"
                sx={{
                  width: "18%",
                  fontSize: "18px",
                  display: { xs: "none", sm: "block" },
                  color: "var(--text-primary)",
                  fontWeight: 700,
                }}
              >
                SSS
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  gap: "24px",
                  width: "80%",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", gap: "24px" }}>
                  {navItems.map((item) => (
                    <Typography
                      variant="button"
                      key={item.name}
                      onClick={() => this.navigateTo(item.routes)}
                      sx={{
                        color: "var(--text-primary)",
                        cursor: "pointer",
                        transition: "color 0.2s ease",
                        "&:hover": {
                          color: "var(--accent)",
                        },
                      }}
                    >
                      {item.name}
                    </Typography>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "999px",
                    textTransform: "none",
                    background: "var(--accent-gradient)",
                  }}
                  onClick={() =>
                    navigateTo(
                      "https://drive.google.com/uc?export=download&id=1jj2iw1bHdgiWZ-DPCCIwxll1guDj43VK",
                      this.props.navigate
                    )
                  }
                >
                  Download Resume
                </Button>
                <ThemeToggle />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Box component="nav">
          <Drawer
            // container={this.container}
            variant="temporary"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: "var(--bg-card)",
                borderRight: "1px solid var(--border-subtle)",
              },
            }}
          >
            {this.drawer}
          </Drawer>
        </Box>
      </Box>
    );
  }
}
const styles: any = (theme: Theme) => ({
  appbarBackground: {
    background: "transparent !important",
    top: 0,
    zIndex: 1100,
  },
});

export default withStyles(styles)(withRouter(DrawerAppBar));
