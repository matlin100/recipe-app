import React, { useState } from 'react';

function RecipeCard({ recipe, imageUrl }) {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className="recipe-card">
      <img src={imageUrl} alt="Recipe" />
      <h3>Recipe {recipe.number}</h3>
      <button onClick={() => setShowIngredients(!showIngredients)}>
        {showIngredients ? 'Hide' : 'Show'} Ingredients
      </button>
      {showIngredients && <p>{recipe.ingredients}</p>}
      <button onClick={() => setShowInstructions(!showInstructions)}>
        {showInstructions ? 'Hide' : 'Show'} Instructions
      </button>
      {showInstructions && <p>{recipe.instructions}</p>}
    </div>
  );
}

export default RecipeCard;
