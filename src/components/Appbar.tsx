import * as React from "react"
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
} from "@mui/material"
import { Theme } from "@mui/system"
import { withStyles } from "@mui/styles"
import MenuIcon from "@mui/icons-material/Menu"
interface DrawerAppBarProps {
  window?: () => Window
  classes?: any
}
interface DrawerAppBarState {
  mobileOpen: boolean
}

const drawerWidth = 240
const navItems = ["Home", "About Me", "Skills", "Project", "Contact"]

class DrawerAppBar extends React.PureComponent<
  DrawerAppBarProps,
  DrawerAppBarState
> {
  constructor(props: DrawerAppBarProps) {
    super(props)
    this.state = {
      mobileOpen: false,
    }
  }

  handleDrawerToggle = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen,
    })
  }

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
  )

  render() {
    const { classes } = this.props
    return (
      <Box sx={{ display: "flex" }}>
        <AppBar className={classes.appbarBackground} component="nav">
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
    )
  }
}
const styles = (theme: Theme) => ({
  appbarBackground: { background: "#ffa500 !important" },
})

export default withStyles(styles)(DrawerAppBar)
