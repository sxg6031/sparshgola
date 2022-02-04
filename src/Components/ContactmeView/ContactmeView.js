import React from 'react'
import "./ContactmeView.css"
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from './images/LinkedInLogo.png';
import GitHubLogo from './images/GitHub_Logo.png'

function card(icon, key, isImage){
    return(
        <Box className='box'>
            <Card className='card'>
                <Box sx={{"display": "flex"}}>
                    <Box sx={{}}>
                        {!isImage && icon}
                        {isImage && <img width="70px" src={icon} alt="LinkedInLogo"/>}
                    </Box>
                    <Box style={{marginLeft: "20px", wordWrap: "break-word"}}>
                    <a href={key}><Typography style={{color: "blue"}} noWrap="false">{key}</Typography></a>
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}

function cardPhone(icon, key, isImage){
    return(
        <Box className='box'>
            <Card className='card'>
                <Box sx={{"display": "flex"}}>
                    <Box sx={{}}>
                        {!isImage && icon}
                        {isImage && <img width="70px" src={icon} alt="LinkedInLogo"/>}
                    </Box>
                    <Box style={{marginLeft: "20px"}}>
                    <a href="tel:123-456-7890">{key}</a>
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}

function cardMail(icon, key, isImage){
    return(
        <Box className='box'>
            <Card className='card'>
                <Box sx={{"display": "flex"}}>
                    <Box sx={{}}>
                        {!isImage && icon}
                        {isImage && <img width="70px" src={icon} alt="LinkedInLogo"/>}
                    </Box>
                    <Box style={{marginLeft: "20px"}}>
                    <a href="mailto: sxg6031@rit.edu">{key}</a>
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}

function ContactmeView() {
    const fontSize = "50px"
    return (
        <div>
            <Box className='box'>
            <h1 className='text'>Contact Me</h1>
            </Box>
            {cardPhone(<PhoneIcon style={{color: "black", fontSize: fontSize}}/>, "+1 (585) 837-1794", false)}
            {cardMail(<EmailIcon style={{color: "black", fontSize: fontSize}}/>, "sxg6031@g.rit.edu", false)}
            {card(LinkedInIcon, "https://www.linkedin.com/in/sparsh-gola/", true)}
            {card(GitHubLogo, "https://github.com/sxg6031", true)}
        </div>
    )
}

export default ContactmeView
