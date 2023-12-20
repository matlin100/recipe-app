// src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css'; // Assuming you have a separate CSS file for Sidebar

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <div className="sidebar-content">
        {/* Sidebar content goes here */}
        <p>Sidebar</p>
      </div>
    </div>
  );
}

export default Sidebar;
