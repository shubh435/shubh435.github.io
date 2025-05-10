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
} from "@mui/material";
import { Theme } from "@mui/system";
import { withStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import withRouter from "../utils/withRouter";
import { navigateTo } from "../utils/utils";
interface DrawerAppBarProps {
  window?: () => Window;
  classes?: any;
  navigate: (text: string) => void;
}

interface DrawerAppBarState {
  mobileOpen: boolean;
}

const drawerWidth = 240;
const navItems = [
  { id: 1, name: "Home", routes: "/#" },
  { id: 2, name: "About Me", routes: "#about" },
  { id: 3, name: "Skills", routes: "#skill" },
  { id: 4, name: "Project", routes: "/project" },
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
    };
  }

  handleDrawerToggle = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen,
    });
  };

  navigateTo = (routes: string) => {
    navigateTo(routes,this.props.navigate)
  };
  drawer = (
    <Box onClick={this.handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SSS
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}  onClick={() => this.navigateTo(item.routes)}>
              <ListItemText  sx={{ color: "#fff" }} primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  render() {
    const { classes } = this.props;
    return (
      <Box sx={{ display: "flex", background: "#000 !important" ,position:"relative",flexDirection: "column"}}>
          <AppBar className={classes.appbarBackground} component="nav">
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
                  backgroundImage:
                    "https://www.shutterstock.com/image-illustration/3d-illustration-colorful-wavy-multicolor-260nw-1897581025.jpg",
                  // color: "transparent",
                  // textCli
                  backgroundClip: "text",
                }}
              >
                SSS
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  gap: "30px",
                  width: "80%",
                  justifyContent: "end",
                }}
              >
                {navItems.map((item) => (
                  <Typography
                    variant="button"
                    key={item.name}
                    onClick={() => this.navigateTo(item.routes)}
                    sx={{ color: "#fff" }}
                  >
                    {item.name}
                  </Typography>
                ))}
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
const styles: any = (theme: Theme) => ({
  appbarBackground: {
    background: "#000000 !important",
    top: 0,
    zIndex: 1100,
  },
});

export default withStyles(styles)(withRouter(DrawerAppBar));
