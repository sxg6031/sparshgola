import React from 'react';
import ThumbNail from '../ThumbNail/ThumbNail';
import ReactLogo from '../ToolsView/images/react_logo.svg';
import DjangoLogo from '../ToolsView/images/django-logo-positive.svg';
import Box from '@mui/material/Box';
import CLogo from '../ToolsView/images/c-logo.svg';
import PythonLogo from '../ToolsView/images/python-logo.svg';
import JavaLogo from '../ToolsView/images/java-icon.svg';
import JavaScriptLogo from '../ToolsView/images/javascript-logo.svg';
import CSSLogo from '../ToolsView/images/CSS_Logo.svg';
import HTMLLogo from '../ToolsView/images/HTML_Logo.svg';
import NodeLogo from '../ToolsView/images/nodejs-logo.svg';
import GitIcon from '../ToolsView/images/git-icon.svg';
import FlaskLogo from '../ToolsView/images/flask-logo.svg';
import AWSLogo from '../ToolsView/images/aws-logo.svg';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import './ToolsView.css'
import Button from '@mui/material/Button'

const boxStyle = {
    display: "flex",
    flexWrap: "wrap"
}

const thumbNailStyle = {
    padding: "10px"
}

const fontStyle = {
    color: "aqua"
}

function make_thumbNail(img, title){
    return(
    <Grid item xs={6}>
        <Box className='thumb-nail'>
            <ThumbNail image={img} title={title} />
        </Box>
    </Grid>)
}

function getAWSCertification(){
    window.location.href = "https://www.credly.com/badges/fe053226-9fd7-4bc6-8534-90184e5c110b"
}

function ToolsView() {
    return (
        <Box>
            <Box sx={{
                padding: "10px"
            }}>
            <Typography style={fontStyle}>
            These are different skills I have learned and worked with extensively through my job experiences
            </Typography>
            </Box>
            <Grid container spacing={2}>
                {make_thumbNail(ReactLogo, "React")}
                {make_thumbNail(DjangoLogo, "Django")}
                {make_thumbNail(CLogo, "C Programming Language")}
                {make_thumbNail(PythonLogo, "Python")}
                {make_thumbNail(JavaLogo, "Java")}
                {make_thumbNail(JavaScriptLogo, "Javascript")}
                {make_thumbNail(CSSLogo, "CSS")}
                {make_thumbNail(HTMLLogo, "HTML")}
                {make_thumbNail(NodeLogo, "Node")}
                {make_thumbNail(GitIcon, "Git")}
                {make_thumbNail(FlaskLogo, "Flask")}
                {make_thumbNail(AWSLogo, "AWS")}
            </Grid>

            <Box>
                <h1>AWS Certified Cloud Practitioner</h1>
                <Button variant='contained' onClick={()=>getAWSCertification()}>Link To Badge</Button>
            </Box>
        </Box>
    )
}

export default ToolsView
