// src/components/Main.js
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecipeList from './RecipeList';
import Footer from './Footer';
import RecipeForm from './RecipeForm';
import ImageUpload from './ImageUpload'; // Assuming this is your component for image upload
import MoodRecipeForm from './MoodRecipeForm'; // Assuming this is your component for mood-based recipe search
import './styles/Main.css'; 

function Main({
    recipes,
    imageUrls,
    showSearch,
    onToggleSearch,
    onFetchData,
    recipeType,
    setRecipeType,
    recipeAmount,
    setRecipeAmount,
    showUploadImage,
    onToggleImageSearch,
    onImageUpload,
    showByMoode,
    onToggleByMoodSearch,
    onFetchRecipesByMood,
    isSidebarOpen,
    onToggleSidebar
}) {
    return (
        <div className={`main-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
            <Header onToggleSearch={onToggleSearch} />
            <Sidebar 
                onToggleSearch={onToggleSearch}
                onToggleImageSearch={onToggleImageSearch}
                onToggleByMoodSearch={onToggleByMoodSearch}
                isSidebarOpen={isSidebarOpen}
                onToggleSidebar={onToggleSidebar}
            />
            {showSearch && (
                <RecipeForm
                    onFetchData={onFetchData}
                    recipeType={recipeType}
                    setRecipeType={setRecipeType}
                    recipeAmount={recipeAmount}
                    setRecipeAmount={setRecipeAmount}
                />
            )}
            {showUploadImage && <ImageUpload onImageUpload={onImageUpload} />}
            {showByMoode && <MoodRecipeForm onFetchRecipesByMood={onFetchRecipesByMood} />}
            <RecipeList recipes={recipes} imageUrls={imageUrls} />
            <Footer />
        </div>
    );
}

export default Main;
