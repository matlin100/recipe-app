import React, { useState, useEffect } from 'react';
import './styles/IngredientsForm.css'; // Make sure to create this CSS file

function IngredientsForm({ onFetchRecipesByIngredients }) {
    const [ingredients, setIngredients] = useState(['']);

    useEffect(() => {
        // Automatically add a new input field if the last one is filled
        if (ingredients.length > 0 && ingredients[ingredients.length - 1].trim() !== '') {
            setIngredients([...ingredients, '']);
        }
    }, [ingredients]);

    const handleIngredientChange = (index, value) => {
        let newIngredients = [...ingredients];
        newIngredients[index] = value;

        // Remove empty inputs, except the last one
        newIngredients = newIngredients.filter((ingredient, idx) => {
            return ingredient.trim() !== '' || idx === newIngredients.length - 1;
        });

        setIngredients(newIngredients);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFetchRecipesByIngredients(ingredients.filter(ingredient => ingredient.trim() !== ''));
    };

    return (
        <form onSubmit={handleSubmit} className="ingredients-form">
            {ingredients.map((ingredient, index) => (
                <input
                    key={index}
                    type="text"
                    className="form-input"
                    value={ingredient}
                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                    placeholder={`Ingredient ${index + 1}`}
                />
            ))}
            <button type="submit" className="submit-button">
                Get Recipes
            </button>
        </form>
    );
}

export default IngredientsForm;
