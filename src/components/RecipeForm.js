import React from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';

function RecipeForm({ onFetchData, recipeType, setRecipeType, recipeAmount, setRecipeAmount, isVisible, onToggleSearch }) {
    const handleRecipeTypeChange = (event) => {
        setRecipeType(event.target.value);
    };

    const handleRecipeAmountChange = (event) => {
        setRecipeAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        onFetchData(); // Call onFetchData
        onToggleSearch(); // Call onToggleSearch
    };

    return (
        <Paper elevation={3} className={`recipe-form ${isVisible ? 'visible' : ''}`} sx={{ padding: 3, margin: 2 }}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={6} >
                        <TextField
                            fullWidth
                            label="Recipe Type"
                            variant="outlined"
                            value={recipeType}
                            onChange={handleRecipeTypeChange}
                            placeholder="Enter recipe type"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Number of Recipes"
                            type="number"
                            variant="outlined"
                            InputProps={{ inputProps: { min: 1, max: 20 } }}
                            value={recipeAmount}
                            onChange={handleRecipeAmountChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            sx={{ py: 1.9, }}
                        >
                            Get Recipes
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
}

export default RecipeForm;
