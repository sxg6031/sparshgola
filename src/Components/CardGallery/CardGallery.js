import { Box } from '@mui/system'
import React from 'react'
import ActionCard from '../ActionCard/ActionCard'
import Grid from '@mui/material/Grid'
import {Link} from 'react-router-dom'

const style = {
    padding: "10px"
}

const boxCardStyle = {
}

function makeCard(link, title, description, image){
    return(
        <Grid item xs={12} sm={3}>
            <Link style={{textDecoration: "none"}} to={link}>
            <Box style={boxCardStyle}>
                <ActionCard 
                title={title} 
                description={description} 
                image={image}
                />
            </Box>
            </Link>
        </Grid>
    )
}

function CardGallery() {
    return (
        <Box style={style}>
            <Grid 
            container
            spacing={2}
            >

                {makeCard("/tools", "Skills", "", "")}

                {makeCard("/work_experience", "Work Experience / Leadership", "", "")}

                {makeCard("/other_projects", "Other Projects", "", "")}

                {makeCard("/contact", "Contact Me", "", "")}

            </Grid>



            <br/>
        </Box>
    )
}

export default CardGallery
