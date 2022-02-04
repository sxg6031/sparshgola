import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardGallery from './Components/CardGallery/CardGallery';

function App() {
  return (
    <div className="App">
      <Box>
        <h1 className='Name-Title'>Sparsh Gola</h1>
      </Box>

      <Box sx={{padding: "50px"}} className='Subtext-Box'>
        <Typography variant='body1'
        sx={{
          fontSize: "20px"
        }}
        >
          Hello! My name is Sparsh Gola. I love to solve real-life problems through coding. 
          I truly believe that art and code are one and the same thing. 
          Each line of code I used to craft my projects is like a brushstroke painting the results you will see below. 
        </Typography>
      </Box>

      <Box>
        <CardGallery />
      </Box>
    </div>
  );
}

export default App;
