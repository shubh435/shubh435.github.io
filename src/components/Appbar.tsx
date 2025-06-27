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
import PortfolioContext from "../context/PortfolioContext";
import { systemIcon } from "../assets/assets";
interface DrawerAppBarProps {
  window?: () => Window;
  classes?: any;
  navigate: (text: string) => void;
}

interface DrawerAppBarState {
  mobileOpen: boolean;
  isMode: "light" | "dark";
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
  static contextType?: any = PortfolioContext;
  constructor(props: DrawerAppBarProps) {
    super(props);
    this.state = {
      mobileOpen: false,
      isMode: "light",
    };
  }

  handleDrawerToggle = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen,
    });
  };

  navigateTo = (routes: string) => {
    navigateTo(routes, this.props.navigate)
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
            <ListItemButton sx={{ textAlign: "center" }}
              onClick={() => this.navigateTo(item.routes)}
            >
              <ListItemText sx={{ color: "#fff" }} primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  render() {
    const { classes } = this.props;
    const { theme, toggleMode, mode } = this.context as any;
    return (
      <Box
        sx={{
          display: "flex",
          background: "#000 !important",
          position: "relative",
          flexDirection: "column",
        }}
      >
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
               
                <div className="relative z-0 inline-grid grid-cols-3 gap-0.5 rounded-full bg-gray-950/5 p-0.75 text-gray-950 dark:bg-white/10 dark:text-white" id="headlessui-radiogroup-«r12»" role="radiogroup">

                  <button className="rounded-full p-1.5 *:size-7 data-checked:bg-white data-checked:ring data-checked:inset-ring data-checked:ring-gray-950/10 data-checked:inset-ring-white/10 sm:p-0 dark:data-checked:bg-gray-700 dark:data-checked:text-white dark:data-checked:ring-transparent" aria-label="System theme" id="headlessui-radio-«r13»" role="radio" aria-checked="false" tabIndex={-1} data-headlessui-state="">

                    <svg viewBox="0 0 28 28" fill="none"><path d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V16.5C20.5 17.0523 20.0523 17.5 19.5 17.5H8.5C7.94772 17.5 7.5 17.0523 7.5 16.5V8.5Z" stroke="currentColor"></path><path d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V14.5C20.5 15.0523 20.0523 15.5 19.5 15.5H8.5C7.94772 15.5 7.5 15.0523 7.5 14.5V8.5Z" stroke="currentColor"></path><path d="M16.5 20.5V17.5H11.5V20.5M16.5 20.5H11.5M16.5 20.5H17.5M11.5 20.5H10.5" stroke="currentColor" stroke-linecap="round"></path></svg>

                  </button>

                  <button className="rounded-full p-1.5 *:size-7 data-checked:bg-white data-checked:ring data-checked:inset-ring data-checked:ring-gray-950/10 data-checked:inset-ring-white/10 sm:p-0 dark:data-checked:bg-gray-700 dark:data-checked:text-white dark:data-checked:ring-transparent" aria-label="Light theme" id="headlessui-radio-«r14»" role="radio" aria-checked="false" tabIndex={-1} data-headlessui-state="">
                    <svg viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="3.5" stroke="currentColor"></circle><path d="M14 8.5V6.5" stroke="currentColor" stroke-linecap="round"></path><path d="M17.889 10.1115L19.3032 8.69727" stroke="currentColor" stroke-linecap="round"></path><path d="M19.5 14L21.5 14" stroke="currentColor" stroke-linecap="round"></path><path d="M17.889 17.8885L19.3032 19.3027" stroke="currentColor" stroke-linecap="round"></path><path d="M14 21.5V19.5" stroke="currentColor" stroke-linecap="round"></path><path d="M8.69663 19.3029L10.1108 17.8887" stroke="currentColor" stroke-linecap="round"></path><path d="M6.5 14L8.5 14" stroke="currentColor" stroke-linecap="round"></path><path d="M8.69663 8.69711L10.1108 10.1113" stroke="currentColor" stroke-linecap="round"></path></svg></button>

                  <button className="rounded-full p-1.5 *:size-7 data-checked:bg-white data-checked:ring data-checked:inset-ring data-checked:ring-gray-950/10 data-checked:inset-ring-white/10 sm:p-0 dark:data-checked:bg-gray-700 dark:data-checked:text-white dark:data-checked:ring-transparent" aria-label="Dark theme" id="headlessui-radio-«r15»" role="radio" aria-checked="true" tabIndex={0} data-headlessui-state="checked" data-checked="">
                    <svg viewBox="0 0 28 28" fill="none"><path d="M10.5 9.99914C10.5 14.1413 13.8579 17.4991 18 17.4991C19.0332 17.4991 20.0176 17.2902 20.9132 16.9123C19.7761 19.6075 17.109 21.4991 14 21.4991C9.85786 21.4991 6.5 18.1413 6.5 13.9991C6.5 10.8902 8.39167 8.22304 11.0868 7.08594C10.7089 7.98159 10.5 8.96597 10.5 9.99914Z" stroke="currentColor" stroke-linejoin="round"></path><path d="M16.3561 6.50754L16.5 5.5L16.6439 6.50754C16.7068 6.94752 17.0525 7.29321 17.4925 7.35607L18.5 7.5L17.4925 7.64393C17.0525 7.70679 16.7068 8.05248 16.6439 8.49246L16.5 9.5L16.3561 8.49246C16.2932 8.05248 15.9475 7.70679 15.5075 7.64393L14.5 7.5L15.5075 7.35607C15.9475 7.29321 16.2932 6.94752 16.3561 6.50754Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.3561 11.5075L20.5 10.5L20.6439 11.5075C20.7068 11.9475 21.0525 12.2932 21.4925 12.3561L22.5 12.5L21.4925 12.6439C21.0525 12.7068 20.7068 13.0525 20.6439 13.4925L20.5 14.5L20.3561 13.4925C20.2932 13.0525 19.9475 12.7068 19.5075 12.6439L18.5 12.5L19.5075 12.3561C19.9475 12.2932 20.2932 11.9475 20.3561 11.5075Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </button>
                </div>
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
