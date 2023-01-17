import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { render } from "@testing-library/react";

interface DrawerAppBarProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
interface DrawerAppBarState {
  mobileOpen: boolean;
}

const drawerWidth = 240;
const navItems = ["Home", "About Me", "Skills", "Project", "Contact"];

class DrawerAppBar extends React.PureComponent<
  DrawerAppBarProps,
  DrawerAppBarState
> {
  constructor(props: DrawerAppBarProps) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }

  handleDrawerToggle = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen,
    });
  };

  drawer = (
    <Box onClick={this.handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SSS
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  render() {
    return (
      <Box sx={{ display: "flex" }}>
        <AppBar sx={{ background: "#0d0d0d" }} component="nav">
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
              }}
            >
              SSS
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: "30px",
                width: "80%",
                justifyContent: "center",
              }}
            >
              {navItems.map((item) => (
                <Typography variant="button" key={item} sx={{ color: "#fff" }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Toolbar>
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
                background: "#0d0d0d",
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

export default DrawerAppBar;
