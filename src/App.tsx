import TarotCalculator from './components/TarotCalculator';
import './App.css'
import {Box} from '@mui/material';
import MainBg from '../src/assets/Artboard11.png'

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${MainBg})`, 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 0'
  };

  return (
    <Box 
      sx={backgroundStyle}
    >
    
      <TarotCalculator />
    </Box>
  );
}

export default App
