import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecipeList from './RecipeList';
import Footer from './Footer';

function Main({ recipes, imageUrls }) {
    return (
        <div className="main-container">
            <Header />
            <Sidebar />
            <RecipeList recipes={recipes} imageUrls={imageUrls} />
            <Footer />
        </div>
    );
}

export default Main;

