import TarotCalculator from './components/TarotCalculator';
import './App.css'
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div>
      <h1></h1>
      <Typography align='center' sx={{fontSize: '40px',
    marginBottom: '24px'}}>Archetypal Portrait Calculator</Typography>
      <TarotCalculator />
    </div>
  );
}

export default App
