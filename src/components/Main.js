import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecipeList from './RecipeList';
import Footer from './Footer';
import RecipeForm from './RecipeForm';
import ImageUpload from './ImageUpload'; // Import the ImageUploadForm if it exists

function Main({ recipes, imageUrls, showSearch, showUploadImage, onToggleSearch, onToggleImageSearch, onImageUpload, onFetchData, recipeType, setRecipeType, recipeAmount, setRecipeAmount }) {
  return (
    <div className="main-container">
      <Header onToggleSearch={onToggleSearch} />
      <Sidebar onToggleSearch={onToggleSearch} onToggleImageSearch={onToggleImageSearch} />
      {showSearch && <RecipeForm onFetchData={onFetchData} recipeType={recipeType} setRecipeType={setRecipeType} recipeAmount={recipeAmount} setRecipeAmount={setRecipeAmount} />}
      {showUploadImage && <ImageUpload onImageUpload={onImageUpload} />}
      <RecipeList recipes={recipes} imageUrls={imageUrls} />
      <Footer />
    </div>
  );
}

export default Main;
