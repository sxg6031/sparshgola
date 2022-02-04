import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BlueMatrix from './Blue_Matrix.jpg';
import './CardGallery.css'

export default function ActionCard({title, description, image}) {
  // maxWidth: 345
  return (
    <Card className="Card" sx={{ }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={BlueMatrix}
          alt="green iguana"
        />
        <CardContent className='Card-Content'>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
