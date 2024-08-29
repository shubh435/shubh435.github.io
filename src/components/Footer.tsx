import React from "react";
import { Box, Typography, Link, Grid, Container } from "@mui/material";
interface FooterProps {}

interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Box sx={{ bgcolor: "#000", color: "white", py: 3 }} id="footer">
        <Container sx={{ mx: "auto" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4">Quick Links</Typography>
              <Box sx={{ mt: 1 }}>
                <Link
                  display={"block"}
                  color={"inherit"}
                  href="https://github.com/shubh435"
                >
                  Github
                </Link>
                <Link
                  display={"block"}
                  color={"inherit"}
                  href="https://www.linkedin.com/in/shubhamsarode-dev/"
                >
                  Linkdin
                </Link>
                <Link
                  display={"block"}
                  color={"inherit"}
                  href="https://shubhamsarode4355.blogspot.com/"
                >
                  Blog
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4">Contact</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Email:{" "}
                <Link href="mailto:shubhamsarode435@gmail.com" color="inherit">
                  shubhamsarode435
                </Link>
              </Typography>
              <Typography variant="body2">
                Mobile Number:{" "}
                <Link href="mailto:8605234316" color="inherit">
                  +91 8605234316
                </Link>
              </Typography>
              <Typography variant="body2">
                Portfolio:{" "}
                <Link href="https://shubh435.github.io/" color="inherit">
                  shubh435.github.io
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography variant="body2">
              © {new Date().getFullYear()} Shubham. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }
}

export default Footer;
