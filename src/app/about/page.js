import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';

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
        I am a seasoned Software Developer with extensive experience in Python, JavaScript, Django, .NET, and Next.js. My expertise also includes HTML, CSS, and cloud platforms such as Digital Ocean, AWS, and Azure. I am committed to continuous learning and staying updated with the latest technological advancements.

Currently, I develop, maintain, and enhance web applications for a diverse range of clients, ensuring robust and scalable solutions. I excel in deploying and managing applications on the cloud, focusing on creating intuitive, user-friendly web applications that deliver exceptional user experiences.

As a collaborative team player, I thrive in dynamic environments and consistently strive to deliver high-quality projects. My mindset of continuous improvement, combined with effective communication skills, enables me to advocate for best practices and ensure alignment with business needs and technological advancements.
        </Typography>
        
        <Copyright />
      </Box>
    </Container>
  );
}
