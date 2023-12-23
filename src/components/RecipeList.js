import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes, imageUrls }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} imageUrl={imageUrls[index]} />
      ))}
    </div>
  );
}

export default RecipeList;
