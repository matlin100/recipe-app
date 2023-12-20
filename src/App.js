// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchRecipes } from './api/recipes';
import Main from './components/Main';
import './App.css';

function App() {
  const [recipesData, setRecipesData] = useState({ recipes: [], imageUrl: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRecipes('pasta', 5);
      console.log(data);
      if (data) {
        setRecipesData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Main recipes={recipesData.recipes} imageUrls={recipesData.imageUrl} />
    </div>
  );
}

export default App;
