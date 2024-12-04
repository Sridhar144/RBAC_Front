import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => (
  <AppBar position="static" style={{ backgroundColor: '#333' }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        RBAC Dashboard
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
