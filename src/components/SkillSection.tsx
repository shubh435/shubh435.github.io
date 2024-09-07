// SkillSection.js
import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import LampEffect from "./LampEffect";

const skills = [
  "React",
  "React Native",
  "jest",
  "enzyme",
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "Node.js",
  "express.js",
  "Electron.js",
  "git",

  // add more skills as needed
];

const SkillSection = () => {
  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: "#f5f5f5",
      }}
      id="skill"

    >
      <Container component={"section"}>
        <Typography
          component={"h2"}
          variant="h2"
          gutterBottom
          textTransform={"uppercase"}
        >
          Skills
        </Typography>
        <Grid container spacing={2} justifyContent={"space-between"} component={"div"}>
          {skills.map((skill) => (
            <Grid item key={skill} mx={"auto"} >
              <LampEffect label={skill} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillSection;
