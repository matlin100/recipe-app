import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

function RecipeCard({ recipe, imageUrl }) {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <Card className="recipe-card" sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={recipe.name} // Use recipe name for alt text
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.name} {/* Display the recipe name */}
        </Typography>
        <Button 
          size="small" 
          onClick={() => setShowIngredients(!showIngredients)}
        >
          {showIngredients ? 'Hide' : 'Show'} Ingredients
        </Button>
        <Collapse in={showIngredients} timeout="auto" unmountOnExit>
          <Typography paragraph>{recipe.ingredients}</Typography>
        </Collapse>
        <Button 
          size="small" 
          onClick={() => setShowInstructions(!showInstructions)}
        >
          {showInstructions ? 'Hide' : 'Show'} Instructions
        </Button>
        <Collapse in={showInstructions} timeout="auto" unmountOnExit>
          <Typography paragraph>{recipe.instructions}</Typography>
        </Collapse>
      </CardContent>
    </Card>
  );
}

export default RecipeCard;
