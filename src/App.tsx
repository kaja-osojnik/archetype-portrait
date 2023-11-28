import TarotCalculator from './components/TarotCalculator';
import './App.css'
import {Typography, Box} from '@mui/material';
import MainBg from '../src/assets/Artboard11.png'

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${MainBg})`, // Specify the URL of the image
    backgroundSize: 'cover', // Set the background size property
    backgroundRepeat: 'no-repeat', // Set the background repeat property
    minHeight: '100vh', // Set the height of the box to fill the viewport
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 0'
    // Add other styles if needed
  };

  return (
    <Box 
      sx={backgroundStyle}
    >
      <Typography align='center' variant='h1' sx={{fontSize: '40px',
    marginBottom: '24px'}}>Archetype Calculator</Typography>
      <TarotCalculator />
    </Box>
  );
}

export default App
