import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MoodIcon from '@mui/icons-material/Mood';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import './styles/Sidebar.css';

function Sidebar({ onToggleSearch, onToggleImageSearch, onToggleByMoodSearch, onToggleByIngredientsSearch, isSidebarOpen, onToggleSidebar }) {
    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <button className="toggle-button" onClick={onToggleSidebar}>
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

                <button onClick={onToggleByMoodSearch} className="sidebar-button">
                    <MoodIcon className="sidebar-icon" />
                    Search by Mood
                </button>

                <button onClick={onToggleByIngredientsSearch} className="sidebar-button">
                    <LocalGroceryStoreIcon className="sidebar-icon" />
                    Search by Ingredients
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
