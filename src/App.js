// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchRecipes } from './api/recipes';
import Main from './components/Main';
import { ClipLoader } from 'react-spinners';
import './App.css';


function App() {
  const [recipesData, setRecipesData] = useState({ recipes: [], imageUrl: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [recipeType, setRecipeType] = useState('pasta');
  const [recipeAmount, setRecipeAmount] = useState(5);

  const fetchData = async (e) => {
    e?.preventDefault();
    setIsLoading(true);
    const data = await fetchRecipes(recipeType, recipeAmount);
    if (data) {
      setRecipesData(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleSearch = () => setShowSearch(!showSearch);
 


  return (
    <div className="App">
      <Main 
        recipes={recipesData.recipes} 
        imageUrls={recipesData.imageUrl}
        showSearch={showSearch}
        onToggleSearch={toggleSearch}
        onFetchData={fetchData}
        recipeType={recipeType}
        setRecipeType={setRecipeType}
        recipeAmount={recipeAmount}
        setRecipeAmount={setRecipeAmount}

      />

      {isLoading && (
        <div className="spinner">
          <ClipLoader size={150} />
        </div>
      )}
    </div>
  );
}

export default App;
