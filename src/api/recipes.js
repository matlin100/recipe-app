// src/api/recipes.js
import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3000/recipes/byType';

export const fetchRecipes = async (type, amount) => {
  try {
    // Use POST request and send data in the body
    const response = await axios.post(API_ENDPOINT, { type, amount });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return null;
  }
};
