import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecipeList from './RecipeList';
import Footer from './Footer';
import RecipeForm from './RecipeForm';
import ImageUpload from './ImageUpload'; // Import the ImageUploadForm if it exists
import './styles/Main.css'; 

function Main({ recipes, imageUrls, showSearch, showUploadImage, onToggleSearch, onToggleImageSearch, onImageUpload, onFetchData, recipeType, setRecipeType, recipeAmount, setRecipeAmount, isSidebarOpen, onToggleSidebar }) {
  return (
    <div className={`main-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Header onToggleSearch={onToggleSearch} />
        <Sidebar onToggleSearch={onToggleSearch} onToggleImageSearch={onToggleImageSearch} onToggleSidebar={onToggleSidebar}  isSidebarOpen={isSidebarOpen}/>
        {showSearch && <RecipeForm onFetchData={onFetchData} recipeType={recipeType} setRecipeType={setRecipeType} recipeAmount={recipeAmount} setRecipeAmount={setRecipeAmount} />}
        {showUploadImage && <ImageUpload onImageUpload={onImageUpload} />}
        <RecipeList recipes={recipes} imageUrls={imageUrls} />
        <Footer />
    </div>
  );
}

export default Main;
