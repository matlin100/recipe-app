import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MoodIcon from '@mui/icons-material/Mood';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import useMediaQuery from '@mui/material/useMediaQuery';

function Header({ 
   onToggleSearch,
  onToggleSidebar,
  onToggleImageSearch,
  onToggleByMoodSearch,
  onToggleByIngredientsSearch,
  onToggleContactForm }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery('(max-width:700px)');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {isMobile ? null : (
          <IconButton onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
        )}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose} // Close the menu when clicking outside
        >
          <MenuItem onClick={() => { onToggleSidebar(); handleMenuClose(); }}>
            <IconButton color="inherit" edge="start" onClick={onToggleSidebar}>
              <MenuIcon />
            </IconButton>
            Toggle Sidebar
          </MenuItem>
          <MenuItem onClick={() => { onToggleSearch(); handleMenuClose(); }}>
            <IconButton color="inherit" edge="start" onClick={onToggleSearch}>
               <SearchIcon />
            </IconButton>
            Search Recipe
          </MenuItem>
          <MenuItem onClick={() => { onToggleImageSearch(); handleMenuClose(); }}>
            <IconButton color="inherit" edge="start" onClick={onToggleImageSearch}>
              <CloudUploadIcon />
            </IconButton>
            Upload Image
          </MenuItem>
          <MenuItem onClick={() => { onToggleByMoodSearch(); handleMenuClose(); }}>
            <IconButton color="inherit" edge="start" onClick={onToggleByMoodSearch}>
              <MoodIcon />
            </IconButton>
            Search by Mood
          </MenuItem>
          <MenuItem onClick={() => { onToggleByIngredientsSearch(); handleMenuClose(); }}>
            <IconButton color="inherit" edge="start" onClick={onToggleByIngredientsSearch}>
              <LocalGroceryStoreIcon />
            </IconButton>
            Search by Ingredients
          </MenuItem>
          <MenuItem onClick={() => { onToggleContactForm(); handleMenuClose(); }}>
            <IconButton color="inherit" edge="start" onClick={onToggleContactForm}>
              <ContactMailIcon />
            </IconButton>
            Contact Us
          </MenuItem>
        </Menu>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Recipe App
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="search"
          onClick={onToggleSearch}
        >
          <SearchIcon sx={{ marginRight: 2 }}/>
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="search"
          onClick={onToggleImageSearch}
        >
          <CloudUploadIcon sx={{ marginRight: 2 }} />
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="search"
          onClick={onToggleByMoodSearch}
        >
          <MoodIcon sx={{ marginRight: 2 }} />
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="search"
          onClick={onToggleByIngredientsSearch}
        >
          <LocalGroceryStoreIcon sx={{ marginRight: 2 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
