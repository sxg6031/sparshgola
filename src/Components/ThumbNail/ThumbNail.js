import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const titleStyle = {
  color: "white",
  paddingLeft: "10px"
}

const boxStyle = {
  display: "flex",
  // backgroundColor: "white"
}

export default function ThumbNail({image, title}) {
  const theme = useTheme();

  return (
    <Box style={boxStyle}>
      <Box style={{backgroundColor: "white"}}>
        <img src={image} width="50px" height="50px"/>
      </Box>

      <Box sx={{
        marginTop: "auto",
        marginBottom: "auto"
      }}>
        <Typography style={titleStyle}>{title}</Typography>
      </Box>
    </Box>
  );
}
