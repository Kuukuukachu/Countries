import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import MenuIcon from '@mui/icons-material/Menu';

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <FollowTheSignsIcon
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </FollowTheSignsIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Countries
          </Typography>
          <Button color="inherit">Dark Mode</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}