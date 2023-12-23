import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecipeList from './RecipeList';
import Footer from './Footer';
import RecipeForm from './RecipeForm';
import ImageUpload from './ImageUpload';
import MoodRecipeForm from './MoodRecipeForm';
import IngredientsForm from './IngredientsForm';
import './styles/Main.css';

function Main({
    recipes,
    imageUrls,
    showSearch,
    onToggleSearch,
    onFetchData,
    recipeType,
    setRecipeType,
    recipeAmount,
    setRecipeAmount,
    showUploadImage,
    onToggleImageSearch,
    onImageUpload,
    showByMoode,
    onToggleByMoodSearch,
    onFetchRecipesByMood,
    isSidebarOpen,
    onToggleSidebar,
    showIngredientsForm,
    onToggleIngredientsForm,
    onFetchRecipesByIngredients,
    onToggleByIngredientsSearch,
}) {
    return (
        <div className={`main-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
            <Header onToggleSearch={onToggleSearch} />
            <Sidebar 
                onToggleSearch={onToggleSearch}
                onToggleImageSearch={onToggleImageSearch}
                onToggleByMoodSearch={onToggleByMoodSearch}
                onToggleByIngredientsSearch={onToggleByIngredientsSearch}
                onToggleIngredientsForm={onToggleIngredientsForm}
                isSidebarOpen={isSidebarOpen}
                onToggleSidebar={onToggleSidebar}
                
            />
            {showSearch && (
                <RecipeForm
                    onFetchData={onFetchData}
                    recipeType={recipeType}
                    setRecipeType={setRecipeType}
                    recipeAmount={recipeAmount}
                    setRecipeAmount={setRecipeAmount}
                />
            )}
            {showUploadImage && <ImageUpload onImageUpload={onImageUpload} />}
            {showByMoode && <MoodRecipeForm onFetchRecipesByMood={onFetchRecipesByMood} />}
            {showIngredientsForm && <IngredientsForm onFetchRecipesByIngredients={onFetchRecipesByIngredients} />}
            <RecipeList recipes={recipes} imageUrls={imageUrls} />
            <Footer />
        </div>
    );
}

export default Main;
