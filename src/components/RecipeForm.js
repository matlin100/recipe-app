// src/components/RecipeForm.js
import React from 'react';
import './styles/RecipeForm.css'; // Add this line for styling

function RecipeForm({ onFetchData, recipeType, setRecipeType, recipeAmount, setRecipeAmount }) {
  return (
    <form onSubmit={onFetchData} className="recipe-form">
      <input 
        type="text"
        value={recipeType}
        onChange={(e) => setRecipeType(e.target.value)}
        placeholder="Enter recipe type"
        className="form-input"
      />
      <input 
        type="number" 
        min="1" 
        max="20"
        value={recipeAmount}
        onChange={(e) => setRecipeAmount(e.target.value)}
        placeholder="Number of recipes"
        className="form-input"
      />
      <button type="submit" className="submit-button">Get Recipes</button>
    </form>
  );
}

export default RecipeForm;
