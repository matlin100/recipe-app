import React, { useState, useEffect } from 'react';
import { fetchRecipes ,uploadImageAndGetRecipes } from './api/recipes';
import Main from './components/Main';
import { ClipLoader } from 'react-spinners';
import './App.css';

function App() {
  const [recipesData, setRecipesData] = useState({ recipes: [], imageUrl: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showUploadImage, setShowUploadImage] = useState(false);
  const [recipeType, setRecipeType] = useState('pasta');
  const [recipeAmount, setRecipeAmount] = useState(5);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchData = async (e) => {
    e?.preventDefault();
    setIsLoading(true);
    const data = await fetchRecipes(recipeType, recipeAmount);
    if (data) {
      setRecipesData(data);
    }
    setIsLoading(false);
    setShowSearch(false); // Hide the search form after fetching recipes
  };

  const handleImageUpload = async (imageFile) => {
    setIsLoading(true);
    const data = await uploadImageAndGetRecipes(imageFile);
    if (data) {
      setRecipesData(data);
    }
    setIsLoading(false);
    setShowUploadImage(false); // Hide the upload form after fetching recipes
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleImageSearch = () => setShowUploadImage(!showUploadImage);
  const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen);};
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
        showUploadImage={showUploadImage}
        onToggleImageSearch={toggleImageSearch}
        onImageUpload={handleImageUpload}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
      />
      {isLoading && (
        <div className="spinner loading-overlay">
          <ClipLoader size={150} />
        </div>
      )}
    </div>
  );
}

export default App;
