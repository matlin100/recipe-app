// src/components/Header.js
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../App.css'; // Ensure you have the right path to the CSS file

function Header({ onToggleSearch }) {
  return (
    <header className="app-header">
      Recipe App
      <button onClick={onToggleSearch} className="search-icon">
        <SearchIcon />
      </button>
    </header>
  );
}

export default Header;
