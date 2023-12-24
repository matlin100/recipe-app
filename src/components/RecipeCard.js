import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function RecipeCard({ recipe, imageUrl }) {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const renderIngredients = () => {
    return recipe.ingredients.split('\n').map((ingredient, index) => (
      <Typography key={index} paragraph>
        {ingredient}
      </Typography>
    ));
  };

  const renderInstructions = () => {
    return recipe.instructions.split('\n').map((instruction, index) => (
      <Typography key={index} paragraph>
        {instruction}
      </Typography>
    ));
  };

  return (
    <Card className="recipe-card" sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={recipe.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.name}
        </Typography>
        <Button
          size="small"
          onClick={() => setShowIngredients(!showIngredients)}
          startIcon={showIngredients ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {showIngredients ? 'Hide' : 'Show'} Ingredients
        </Button>
        <Collapse in={showIngredients} timeout="auto" unmountOnExit>
          {renderIngredients()}
        </Collapse>
        <Button
          size="small"
          onClick={() => setShowInstructions(!showInstructions)}
          startIcon={
            showInstructions ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }
        >
          {showInstructions ? 'Hide' : 'Show'} Instructions
        </Button>
        <Collapse in={showInstructions} timeout="auto" unmountOnExit>
          {renderInstructions()}
        </Collapse>
      </CardContent>
    </Card>
  );
}

export default RecipeCard;
