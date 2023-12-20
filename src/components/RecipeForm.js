// src/components/RecipeForm.js
import React from 'react';
import './styles/RecipeForm.css'; // Ensure you have the right path to the CSS file

function RecipeForm({ onFetchData, recipeType, setRecipeType, recipeAmount, setRecipeAmount, isVisible }) {
    return (
      <form onSubmit={onFetchData} className={`recipe-form ${isVisible ? 'visible' : ''}`}>
          <input 
        type="text"
        className="form-input"
        value={recipeType}
        onChange={(e) => setRecipeType(e.target.value)}
        placeholder="Enter recipe type"
      />
      <input 
        type="number"
        className="form-input"
        min="1" 
        max="20"
        value={recipeAmount}
        onChange={(e) => setRecipeAmount(e.target.value)}
        placeholder="Number of recipes"
      />
      <button type="submit" className="submit-button">Get Recipes</button>
      </form>
    );
  }


export default RecipeForm;
