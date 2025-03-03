import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Grid from '@mui/material/Grid';
import ProjectCard from '@/components/Card/ProjectCard';

export default function About() {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                    My Project
                </Typography>


                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} minHeight={160}>
                        <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                            <ProjectCard />
                        </Grid>
                        <Grid display="flex" justifyContent="center" alignItems="center">
                            <ProjectCard />
                        </Grid>
                        <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                            <ProjectCard />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
