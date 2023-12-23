import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Paper, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function IngredientsForm({ onFetchRecipesByIngredients, onToggleByIngredientsSearch }) {
  const [ingredients, setIngredients] = useState(['']);

  useEffect(() => {
    // Remove empty ingredient fields when rendering
    const filteredIngredients = ingredients.filter((ingredient) => ingredient.trim() !== '');
    if (filteredIngredients.length === 0) {
      setIngredients(['']);
    } else {
      setIngredients(filteredIngredients);
    }
  }, []);

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = ingredients.filter((_, idx) => idx !== index);
    setIngredients(newIngredients);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (index === ingredients.length - 1) {
        setIngredients([...ingredients, '']);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredIngredients = ingredients.filter((ingredient) => ingredient.trim() !== '');
    onFetchRecipesByIngredients(filteredIngredients);
    onToggleByIngredientsSearch();
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, margin: 2 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {ingredients.map((ingredient, index) => (
            <React.Fragment key={index}>
              <Grid item xs={10}>
                <TextField
                  fullWidth
                  label={`Ingredient ${index + 1}`}
                  variant="outlined"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                  placeholder="Enter an ingredient"
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  color="error"
                  onClick={() => handleRemoveIngredient(index)}
                  disabled={ingredients.length === 1}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </Grid>
            </React.Fragment>
          ))}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Get Recipes
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default IngredientsForm;
