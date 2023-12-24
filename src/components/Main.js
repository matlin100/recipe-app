import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecipeList from './RecipeList';
import Footer from './Footer';
import RecipeForm from './RecipeForm';
import ImageUpload from './ImageUpload';
import MoodRecipeForm from './MoodRecipeForm';
import IngredientsForm from './IngredientsForm';
import ContactForm from './ContactForm';
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
  showContactForm,
  onToggleContactForm,
  onToggleByIngredientsSearch,
  
}) {
  return (
    <div className={`main-container ${isSidebarOpen ? 'sidebar-open' : ''} ${showContactForm ? 'blurred-background' : ''}`}>
      <Header 
       onToggleSearch={onToggleSearch}
       onToggleSidebar={onToggleSidebar}
       onToggleImageSearch={onToggleImageSearch}
       onToggleByMoodSearch={onToggleByMoodSearch}
       onToggleByIngredientsSearch={onToggleByIngredientsSearch}
       onToggleIngredientsForm={onToggleIngredientsForm}
       isSidebarOpen={isSidebarOpen}
       onToggleContactForm={onToggleContactForm} />
      <Sidebar
        onToggleSearch={onToggleSearch}
        onToggleImageSearch={onToggleImageSearch}
        onToggleByMoodSearch={onToggleByMoodSearch}
        onToggleByIngredientsSearch={onToggleByIngredientsSearch}
        onToggleIngredientsForm={onToggleIngredientsForm}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={onToggleSidebar}
        onToggleContactForm={onToggleContactForm}
      />
      {showSearch && (
        <RecipeForm
          onFetchData={onFetchData}
          recipeType={recipeType}
          setRecipeType={setRecipeType}
          recipeAmount={recipeAmount}
          setRecipeAmount={setRecipeAmount}
          onToggleSearch={onToggleSearch}
          onToggleContactForm={onToggleContactForm}
        />
      )}
      {showUploadImage && <ImageUpload onImageUpload={onImageUpload} onToggleImageSearch={onToggleImageSearch} />}
      {showByMoode && <MoodRecipeForm onFetchRecipesByMood={onFetchRecipesByMood} />}
      {showIngredientsForm && <IngredientsForm onFetchRecipesByIngredients={onFetchRecipesByIngredients} onToggleByIngredientsSearch={onToggleByIngredientsSearch} />}
      <ContactForm isOpen={showContactForm} onClose={onToggleContactForm} />
      <RecipeList recipes={recipes} imageUrls={imageUrls} />
      <Footer />
    </div>
  );
}

export default Main;
