// src/components/Sidebar.js
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './styles/Sidebar.css'; // Assuming you have a separate CSS file for Sidebar

function Sidebar({ onToggleSearch }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Open'}
      </button>

      <div className="sidebar-content">
        {/* Sidebar content goes here */}
        <p>Sidebar</p>
        <button onClick={onToggleSearch} className="search-icon">
        Search recipe <SearchIcon />
        </button>
      </div>
    </div>

  );
}

export default Sidebar;
