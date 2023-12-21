// src/components/Sidebar.js
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MenuIcon from '@mui/icons-material/Menu'; // Import for 'Open' icon
import CloseIcon from '@mui/icons-material/Close'; // Import for 'Close' icon
import './styles/Sidebar.css';

function Sidebar({ onToggleSearch, onToggleImageSearch  ,onToggleSidebar, isSidebarOpen }) {
  const [isOpen, setIsOpen] = useState(onToggleSidebar);

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={ onToggleSidebar}>
        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />} 
      </button>

      <div className="sidebar-content">
        <button onClick={onToggleSearch} className="sidebar-button">
          <SearchIcon className="sidebar-icon" />
          Search recipe
        </button>
        
        <button onClick={onToggleImageSearch} className="sidebar-button">
          <CloudUploadIcon className="sidebar-icon" />
          Upload Image
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
