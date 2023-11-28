import TarotCalculator from './components/TarotCalculator';
import './App.css'
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div>
      <Typography align='center' variant='h1' sx={{fontSize: '40px',
    marginBottom: '24px'}}>Archetypal Portrait Calculator</Typography>
      <TarotCalculator />
    </div>
  );
}

export default App
