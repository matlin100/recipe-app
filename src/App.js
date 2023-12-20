// src/App.js
import React, { useState ,useEffect } from 'react';
import { fetchRecipes } from './api/recipes';
import Main from './components/Main';
import RecipeForm from './components/RecipeForm';
import './App.css';

function App() {
  const [recipesData, setRecipesData] = useState({ recipes: [], imageUrl: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [recipeType, setRecipeType] = useState('pasta'); // Default to 'pasta'
  const [recipeAmount, setRecipeAmount] = useState(5); // Default to 5

  const fetchData = async (e) => {
    e && e.preventDefault();
    setIsLoading(true);
    const data = await fetchRecipes(recipeType, recipeAmount);
    if (data) {
      setRecipesData(data);
    }
    setIsLoading(false);
  };

  // Fetch default data on mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <RecipeForm onFetchData={fetchData} recipeType={recipeType}setRecipeType={setRecipeType} recipeAmount={recipeAmount}setRecipeAmount={setRecipeAmount}/>
      {isLoading ? (
        <p>Loading recipes...</p>
      ) : (
        <Main recipes={recipesData.recipes} imageUrls={recipesData.imageUrl} />
      )}
    </div>
  );
}

export default App;
