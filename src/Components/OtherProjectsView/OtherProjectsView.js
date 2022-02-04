import Typography from '@mui/material/Typography'
import React from 'react'
import './OtherProjectsView.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import VigilanceIcon from './images/Slide1.png';
import {Link} from 'react-router-dom'
import TitanicImg from './images/titanic.jpg';
import Box from '@mui/material/Box'

function card(title, description, image, link){

  return (
    <a style={{textDecoration: "none"}} href={link} target="_blank">
    <Card sx={{ maxWidth: 400}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="Project Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
  );
}

function cardVigi(title, description, image, link){

  return (
    <Link style={{textDecoration: "none"}} to={link} target="_blank">
    <Card sx={{ maxWidth: 400}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="Project Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}

function OtherProjectsView() {
    return (
        <div>
          <Box className="box">
            <h1 className='text'>OtherProjectsView</h1>

            <h2 className="text">1. Vigilance department app</h2>
            {cardVigi("Vigilance App", "This is the vigilance app", VigilanceIcon, "vigilance_app")}

            <br/>

            <h2 className="text">2. Titanic Survivor Prediction Model</h2>
            {card("Titanic Project", "This is titanic prediction model", TitanicImg, "https://sxg6031.github.io/titanic_project/")}
          </Box>
        </div>
    )
}

export default OtherProjectsView
