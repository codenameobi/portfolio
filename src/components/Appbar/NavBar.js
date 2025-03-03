import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={4}>
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <b>tobynwude</b>
          </Typography>
          <Button color="inherit" component={NextLink} href="/about">
            About
          </Button>
          <Button color="inherit" component={NextLink} href="/project">
            Project
          </Button>
          <Button color="inherit" component={NextLink} href="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
