import { Button } from '@mui/material';
import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import styled from 'styled-components';
import MyTable from './components/MyTable';

const StyledButton = styled(Button)(({theme}) => ({
  color: 'blue',
  background: 'white'
}))

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
        <StyledButton> common Styled Button 1</StyledButton>
        <StyledButton> common Styled Button 2</StyledButton>
        <StyledButton> common Styled Button 3</StyledButton>
        <MyTable />
      </header>
    </div>
  );
}

export default App;
