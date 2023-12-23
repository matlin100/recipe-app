//src/api/recipes.js
import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3000/recipes/';

export const fetchRecipes = async (type, amount) => {
  try {
    // Use POST request and send data in the body
    const response = await axios.post(API_ENDPOINT+'byType', { type, amount });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return null;
  }
};

export const uploadImageAndGetRecipes = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await axios.post(API_ENDPOINT+'analyze-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};

export const fetchRecipesByMood = async (moodType) => {
  try {
      const response = await axios.post(API_ENDPOINT + 'byMood', { type: moodType });
      return response.data;
  } catch (error) {
      console.error('Error fetching recipes by mood:', error);
      return null;
  }
};



export const fetchRecipesByIngredients = async (ingredients) => {
  try {
    const response = await axios.post(API_ENDPOINT + 'byIngredients', { ingredients });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes by ingredients:', error);
    return null;
  }
};