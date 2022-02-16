import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CountryCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../img/worldmap.jpeg')}
          alt="za warudo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            A Country
          </Typography>
          <Typography variant="body2" color="text.secondary">
            It's a place with people and stuff!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
