import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Slide1 from './screenshots/Slide1.JPG'
import Slide2 from './screenshots/Slide2.JPG'
import Slide3 from './screenshots/Slide3.JPG'
import Slide4 from './screenshots/Slide4.JPG'
import Slide5 from './screenshots/Slide5.JPG'
import Slide6 from './screenshots/Slide6.JPG'
import Slide7 from './screenshots/Slide7.JPG'
import Slide8 from './screenshots/Slide8.JPG'
import Slide9 from './screenshots/Slide9.JPG'

function showIamge(img, text){
    return(
    <Box style={{display: "flex", justifyContent: "center", padding: "25px"}}>
        <img width="100%" src={img} alt={text}/>
    </Box>
    )
}

function VigilanceApp() {
    return (
        <div>
            <Box style={{marginLeft: "25px"}}>
            <h1 style={{color:'aqua'}}>Vigilance App</h1>
            </Box>

            <ul>
                <li> Created full-stack software for the vigilance department of the Indian Railways </li>
                <li> Government of India's Railway’s original software failed to meet expectations in order to run their system </li>
                <li> The app made it to the final rounds </li>
                <li> Front end is created in React.js using the material concepts while the backend was created in Express Js using Mongodb as the  database</li>
            </ul>

            <Box style={{marginLeft: "25px"}}>
            <h4 style={{color: "aqua"}}>The following are the screenshots of different functionalities of the app</h4>
            </Box>

            {showIamge(Slide1, "Login Page")}
            {showIamge(Slide2, "Login Page")}
            {showIamge(Slide3, "Login Page")}
            {showIamge(Slide4, "Login Page")}
            {showIamge(Slide5, "Login Page")}
            {showIamge(Slide6, "Login Page")}
            {showIamge(Slide7, "Login Page")}
            {showIamge(Slide8, "Login Page")}
            {showIamge(Slide9, "Login Page")}
        </div>
    )
}

export default VigilanceApp
