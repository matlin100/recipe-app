import React, { useState, useEffect } from 'react';
import { fetchRecipes, uploadImageAndGetRecipes, fetchRecipesByMood , fetchRecipesByIngredients} from './api/recipes';
import Main from './components/Main';
import { ClipLoader } from 'react-spinners';
import './App.css';

function App() {
    const [recipesData, setRecipesData] = useState({ recipes: [], imageUrl: [] });
    const [isLoading, setIsLoading] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showUploadImage, setShowUploadImage] = useState(false);
    const [showByMoode, setShowByMoode] = useState(false);
    const [recipeType, setRecipeType] = useState('pasta');
    const [recipeAmount, setRecipeAmount] = useState(5);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showIngredientsForm, setShowIngredientsForm] = useState(false);

    const fetchData = async (e) => {
        e?.preventDefault();
        setIsLoading(true);
        const data = await fetchRecipes(recipeType, recipeAmount);
        if (data) {
            setRecipesData(data);
        }
        setIsLoading(false);
        setShowSearch(false);
    };

    const handleImageUpload = async (imageFile) => {
        setIsLoading(true);
        const data = await uploadImageAndGetRecipes(imageFile);
        if (data) {
            setRecipesData(data);
        }
        setIsLoading(false);
        setShowUploadImage(false);
    };

    const getRecipesByMood = async (moodType) => {
        setIsLoading(true);
        try {
            const response = await fetchRecipesByMood(moodType);
            if (response) {
                setRecipesData(response);
            }
        } catch (error) {
            console.error('Error fetching recipes by mood:', error);
        }
        setIsLoading(false);
        setShowByMoode(false);
    };

    const onFetchRecipesByIngredients = async (ingredients) => {
      setIsLoading(true);
      try {
          // Replace with actual API call or logic
          const response = await fetchRecipesByIngredients(ingredients);
          setRecipesData(response);
      } catch (error) {
          console.error('Error fetching recipes by ingredients:', error);
      }
      setIsLoading(false);
  }; 
   
    useEffect(() => {
        fetchData();
    }, []);

    const toggleSearch = () => setShowSearch(!showSearch);
    const toggleImageSearch = () => setShowUploadImage(!showUploadImage);
    const toggleByMoodSearch = () => setShowByMoode(!showByMoode);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleByIngredientsSearch = () => setShowIngredientsForm(!showIngredientsForm);

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
                onFetchRecipesByMood={getRecipesByMood}
                onToggleByMoodSearch={toggleByMoodSearch}
                showByMoode={showByMoode}
                showIngredientsForm={showIngredientsForm}
                onToggleByIngredientsSearch={toggleByIngredientsSearch}
                onFetchRecipesByIngredients={onFetchRecipesByIngredients} 
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
