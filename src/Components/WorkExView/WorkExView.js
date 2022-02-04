import React from 'react'
import './WorkExView.css'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import LoginImg from './images/Login.png'
import DashboardImg from './images/Dashboard.png'
import SurveyImg from './images/Surveys.png'
import RippleImg from './images/Ripples.png'
import WellnessImg from './images/Wellness.png'
import AnnouncementsImg from './images/Opened Announcement.png'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function getToVideo(){
    window.location.href = "https://www.linkedin.com/feed/update/urn:li:activity:6793557306580705280/"
}

function showImage(img, text){
    return(
        <Grid item>
            <Box style={{padding: "10px"}}>
                <img width='100%' src={img} alt={text} />
            </Box>
        </Grid>
    )
}

function WorkExView() {
    return (
        <div>
            <Box style={{margin: "20px"}}>
            <h1 className='text'>Work Experience</h1>
            <h2 className='text'>Watermark Communities</h2>
            <h3 className='text'>Problem Worked On:</h3>
            <Typography className='text'>
            <ul>
                <li>The Watermark Corporation wanted a better way for social engagement within their offices around the country.</li>
                <li>Their existing desktop app was unintuitive, immobile and confusing</li>
            </ul>
            <br/>
            <h3 className='text'>Solution Created:</h3>
            <ul>
                <li>Chosen as the lead developer to work with a team to create a full-stack app for the company.</li>
                <li>The app was fabricated using react PWA while using nodejs as the back end. Extensive discovery and solution interviews  were conducted to create a resolution to the company's problem.</li>
            </ul>
            </Typography>

            {/* Image Gallery */}
            <Grid container>
                {showImage(LoginImg, "sample")}
                {showImage(DashboardImg, "sample")}
                {showImage(SurveyImg, "sample")}
                {showImage(WellnessImg, "sample")}
                {showImage(AnnouncementsImg, "sample")}
            </Grid>

            {/* Other App */}

            <h1 className='text'>Precision Optical Transceivers Inc.</h1>
            <Typography className='text'>
            Software Engineer Intern at Precision Optical Transceivers Inc, Rochester, NY for 8 months.
            </Typography>

            <Typography className='text'>
            Projects at Internship:
            <Typography>
            Lightseer:
            </Typography>
            <ul>
                <li>
                    Worked on a flask app, Lightseer, that takes data from an API LightCrawler in JSON and display all the data such as ID,
                    status, name, condition, temperature etc. of the devices connected to a server.
                </li>

                <li>
                    Created frontend interface and backend of the LightCrawler.
                </li>

                <li>
                    Worked in team of 3 people
                </li>
            </ul>

            SNMP Data Extractor:
            <Typography>
                <ul>
                    <li>
                    Developed a Django app to extract device hardware data using SNMPv2 and SNMPv3 protocol.
                    </li>

                    <li>
                    Given Device name and ID along with SNMP and server IP version the app extracts device data and stores it in a text file.
                    </li>
                </ul>
            </Typography>

            </Typography>

            <Box>
                <Button onClick={()=>getToVideo()} variant='contained'>VIDEO LINK</Button>
            </Box>

            <br/>

            {/* LEADERSHIP POSITIONS */}

            <h1>3. Grader and Coordinator for Foundations of Computer Graphics</h1>
            <ul>
                <li>Working as a grader and Coordinator helping students learn concepts of computer graphics easily</li>
            </ul>
            <br/>

            <h1>4. RIT Innovation Fellows</h1>
            <h2>Participated in RIT Innovation Fellows program</h2>
            <ul>
                <li>Worked within RIT innovation fellows program.</li>
                <li>The program teaches the ins and outs of of how startups work by simulating the business model of a tech firm </li>
            </ul>
            <br/>

            <h1>5. SI leader</h1>
            <h2> Worked as an instructor for mechanics of programing</h2>
            <ul>
                <li>Worked as an instructor for mechanics of programing</li>
                <li>In charge of Helping students learn difficult concepts of ‘c’ programming language and linux operating system concepts</li>
            </ul>
            <br/>

            <h1>6. Orientation Leader</h1>
            <ul>
                <li>Helped guide the incoming freshman students at RIT</li>
                <li>Primary responsibilities revolved around leading several students in organized activities while also helping them get acclimated to the college.</li>
            </ul>


            </Box>
        </div>
    )
}

export default WorkExView
