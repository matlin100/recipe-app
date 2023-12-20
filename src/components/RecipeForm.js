// src/components/RecipeForm.js
import React from 'react';

function RecipeForm({ onFetchData, recipeType, setRecipeType, recipeAmount, setRecipeAmount }) {
  return (
    <form onSubmit={onFetchData}>
      <input
        type="text"
        value={recipeType}
        onChange={(e) => setRecipeType(e.target.value)}
        placeholder="Enter recipe type"
      />
      <input
        type="number"
        min="1"
        max="20"
        value={recipeAmount}
        onChange={(e) => setRecipeAmount(e.target.value)}
        placeholder="Number of recipes"
      />
      <button type="submit">Get Recipes</button>
    </form>
  );
}

export default RecipeForm;
