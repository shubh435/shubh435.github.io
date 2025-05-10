import React from "react";
import { Box, Button, TextField } from "@mui/material";
import "./Footer.css"
import Grid2 from "@mui/material/Unstable_Grid2";

interface FooterProps {}

interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Box sx={{ bgcolor: "#000", color: "white",  }} id="footer">
        {/* <Container sx={{ mx: "auto" }}>
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
        </Container> */}
<section className="designs-section">
  <Grid2 container  justifyContent={"center"}>

    {/* Left Column: Social Links */}
    <Grid2 xs={12} md={5}>
      <h2>Connect with Me</h2>
      <div className="designs-links">
        <a href="https://github.com/shubh435" target="_blank" rel="noopener noreferrer" className="link-item">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://leetcode.com/u/shubh435/" target="_blank" rel="noopener noreferrer" className="link-item">
          <i className="fab fa-leetcode"></i> LeetCode
        </a>
        <a href="https://www.linkedin.com/in/shubh435/" target="_blank" rel="noopener noreferrer" className="link-item">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://twitter.com/shubh435" target="_blank" rel="noopener noreferrer" className="link-item">
          <i className="fab fa-twitter"></i> Twitter
        </a>
      </div>
    </Grid2>

    {/* Right Column: Contact Form */}
    <Grid2 xs={12} md={5}>
      <div className="contact-info">
        <p>
          <strong>Email: </strong>
          <a href="mailto:shubhamsarode435@gmail.com" className="contact-link">shubhamsarode435@gmail.com</a>
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <TextField
              id="fullname"
              name="fullname"
              placeholder="Enter your full name"
              fullWidth
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <TextField
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              fullWidth
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message..."
              rows={5}
              className="message-textarea"
              required
            ></textarea>
          </div>

          <Button type="submit" variant="contained"  color="primary">
            Message Me
          </Button>
        </form>
      </div>
    </Grid2>

  </Grid2>
</section>
      </Box>
    );
  }
}

export default Footer;
