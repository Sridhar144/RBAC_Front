import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div style={{ width: '200px', backgroundColor: '#f4f4f4', height: '100vh' }}>
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/users">
        <ListItemText primary="Users" />
      </ListItem>
      <ListItem button component={Link} to="/roles">
        <ListItemText primary="Roles" />
      </ListItem>
    </List>
  </div>
);

export default Sidebar;
