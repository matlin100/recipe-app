import React, { useState } from 'react';
import './styles/RecipeForm.css'; // Reuse the styles from RecipeForm

function MoodRecipeForm({ onFetchRecipesByMood }) {
    const [moodType, setMoodType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        onFetchRecipesByMood(moodType);
    };
    return (
        <form onSubmit={handleSubmit} className="recipe-form">
            <input 
                type="text"
                className="form-input"
                value={moodType}
                onChange={(e) => setMoodType(e.target.value)}
                placeholder="Enter your mode "
            />
            <button type="submit" className="submit-button">Get Recipes by Mood</button>
        </form>
    );
}

export default MoodRecipeForm;
