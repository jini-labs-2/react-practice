import { Button } from '@mui/material';
import './App.css';
import HomeIcon from '@mui/icons-material/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>
          <HomeIcon />
        </Button>
        <Button style={{color:'blue', backgroundClor: 'white'}}>
          Styled Button
        </Button>
      </header>
    </div>
  );
}

export default App;
