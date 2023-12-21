import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './styles/Sidebar.css'; // Assuming you have a separate CSS file for Sidebar

function Sidebar({ onToggleSearch ,onToggleImageSearch }) {
  const [isOpen, setIsOpen] = useState(false); // Declare the isOpen state

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Open'}
      </button>

      <div className="sidebar-content">
        {/* Other sidebar content */}
        <p>Sidebar</p>
        <button onClick={onToggleSearch} className="search-icon">
          Search recipe <SearchIcon />
        </button>
        
        <button onClick={onToggleImageSearch} className="sidebar-button">
        Upload Image
      </button>
        

      </div>
    </div>
  );
}

export default Sidebar;
