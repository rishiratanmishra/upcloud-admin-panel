import React from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Box,
  Avatar,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 60;

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 53,
        p: 0, 
        m: 0,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: '#8F8EEC',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 2,
        },
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Avatar sx={{ bgcolor: '#fff', color: '#6b4eff' }}>L</Avatar>
        <Avatar src="/user.png" alt="User" />
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      <List>
        <ListItemButton sx={{ justifyContent: 'center', mb: 2 }}>
          <ListItemIcon sx={{ color: '#fff', minWidth: 'auto' }}>
            <MenuIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton sx={{ justifyContent: 'center' }}>
          <ListItemIcon sx={{ color: '#fff', minWidth: 'auto' }}>
            <SettingsIcon />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
