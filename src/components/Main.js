// src/components/Main.js
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecipeList from './RecipeList';
import Footer from './Footer';
import RecipeForm from './RecipeForm';

function Main({ recipes, imageUrls, showSearch, onToggleSearch, onFetchData, recipeType, setRecipeType, recipeAmount, setRecipeAmount }) {
  return (
    <div className="main-container">
      <Header onToggleSearch={onToggleSearch} />
      <Sidebar onToggleSearch={onToggleSearch} />
      {showSearch && 
        <RecipeForm 
          onFetchData={onFetchData} 
          recipeType={recipeType}
          setRecipeType={setRecipeType} 
          recipeAmount={recipeAmount}
          setRecipeAmount={setRecipeAmount}
        />
      }
      <RecipeList recipes={recipes} imageUrls={imageUrls} />
      <Footer />
    </div>
  );
}

export default Main;
