import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Grid from '@mui/material/Grid';
import ProjectCard from '@/components/Card/ProjectCard';

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
},
{
    id: 2,
    name: 'Adam Graham',
    username: 'Adam',
},
    {
        id: 3,
        name: 'Eve Graham',
        username: 'Eve',
    }, 
    {
    id: 4,
    name: 'Obiora Nwude',
    username: 'Obi',
}
]; 

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
                        {users.map((user) => (
                           <Grid key={user.id} display="flex" justifyContent="center" alignItems="center" size="grow">
                                    <ProjectCard user={user} />
                                </Grid>
                      ))}
                    </Grid>

                   
                </Box>
            </Box>
        </Container>
    );
}
