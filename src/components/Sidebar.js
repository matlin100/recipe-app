import React from 'react';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText,
  IconButton, Divider, Box, Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MoodIcon from '@mui/icons-material/Mood';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CloseIcon from '@mui/icons-material/Close';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Sidebar({ onToggleSearch, onToggleImageSearch, onToggleByMoodSearch, onToggleByIngredientsSearch, isSidebarOpen, onToggleSidebar, onToggleContactForm }) {
  const handleCloseMenu = () => {
    onToggleSidebar();
  };

  return (
    <Drawer open={isSidebarOpen} onClose={handleCloseMenu} anchor="left">
      <IconButton onClick={handleCloseMenu}>
        <CloseIcon />
      </IconButton>
      <Divider />
      <List>
        <ListItem button onClick={onToggleSearch}>
          <ListItemIcon><SearchIcon /></ListItemIcon>
          <ListItemText primary="Search Recipe" />
        </ListItem>
        <ListItem button onClick={onToggleImageSearch}>
          <ListItemIcon><CloudUploadIcon /></ListItemIcon>
          <ListItemText primary="Upload Image" />
        </ListItem>
        <ListItem button onClick={onToggleByMoodSearch}>
          <ListItemIcon><MoodIcon /></ListItemIcon>
          <ListItemText primary="Search by Mood" />
        </ListItem>
        <ListItem button onClick={onToggleByIngredientsSearch}>
          <ListItemIcon><LocalGroceryStoreIcon /></ListItemIcon>
          <ListItemText primary="Search by Ingredients" />
        </ListItem>
        <ListItem button onClick={onToggleContactForm}>
          <ListItemIcon><ContactMailIcon /></ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography variant="body2" color="textSecondary" align="center">
          © 2023 Your App Name
        </Typography>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
