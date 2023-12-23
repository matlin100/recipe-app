import React, { useState } from 'react';
import { TextField, Button, Paper, Grid } from '@mui/material';

function MoodRecipeForm({ onFetchRecipesByMood }) {
    const [moodType, setMoodType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        onFetchRecipesByMood(moodType);
       
    };

    return (
        <Paper elevation={3} sx={{ padding: 3, margin: 2, maxWidth: 500, mx: 'auto' }}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Mood"
                            variant="outlined"
                            value={moodType}
                            onChange={(e) => setMoodType(e.target.value)}
                            placeholder="Enter your mood"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            fullWidth
                        >
                            Get Recipes by Mood
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
}

export default MoodRecipeForm;
