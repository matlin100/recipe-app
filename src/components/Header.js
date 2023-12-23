// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

function Header({ onToggleSearch, onToggleSidebar }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
      <IconButton onClick={onToggleSidebar}>
          <MenuIcon />
      </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Recipe App
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="search"
          onClick={onToggleSearch}
        >
          <SearchIcon />
        </IconButton>
       
      </Toolbar>
    </AppBar>
  );
}

export default Header;
