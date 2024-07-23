// SkillSection.js
import React from 'react';
import { Box, Typography, Grid, Paper, Chip, Container } from '@mui/material';

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
                <Typography component={"h2"} variant="h2" gutterBottom>
                    Skills
                </Typography>
                <Grid container spacing={2}>
                    {skills.map((skill, index) => (
                        <Grid item key={index}>
                            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                                <Chip label={skill} color="primary" sx={{textTransform:"capitalize"}} />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default SkillSection;
