import React, { useState } from 'react';
import {
  Card, CardMedia, CardContent, Typography,
  Button, Collapse, CardActions, Chip, Stack
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KitchenIcon from '@mui/icons-material/Kitchen';

function RecipeCard({ recipe, imageUrl }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, m: 2, boxShadow: 4, borderRadius: 2, borderColor: 'primary.main' }}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={recipe.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" color="primary">
          {recipe.name}
        </Typography>
        <Stack direction="row" spacing={1} mb={1}>
          <Chip icon={<KitchenIcon />} label="Recipe" color="primary" />
          {/* Additional chips or tags can be added here */}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {recipe.shortDescription || 'Delicious and easy to make!'} {/* Optional short description */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          onClick={handleExpandClick}
          endIcon={<ExpandMoreIcon />}
          size="small"
          color="primary"
        >
          {expanded ? 'Less' : 'More'}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="subtitle2" color="primary">Ingredients:</Typography>
          <Typography paragraph>{recipe.ingredients}</Typography>
          <Typography paragraph variant="subtitle2" color="primary">Instructions:</Typography>
          <Typography paragraph>{recipe.instructions}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default RecipeCard;
