// SkillSection.js
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import LampEffect from './LampEffect';

const skills = [
    'React',
    "React Native",
    "jest",
    "enzyme",
    'HTML',
    'CSS',
    'JavaScript',
    "Typescript",
    'Node.js',
    "express.js",
    "Electron.js",
    'git'

    // add more skills as needed
];

const SkillSection = () => {
    return (
        <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', borderRadius: 2, marginTop: 3 }}>
            <Container >
                <Typography component={"h2"} variant="h2" gutterBottom textTransform={"uppercase"}>
                    Skills
                </Typography>
                <Grid container spacing={2} justifyContent={"space-between"}>
                    {skills.map((skill, index) => (
                        <Grid item key={index}>
                            <LampEffect label={skill} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default SkillSection;
