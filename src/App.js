import { Button } from '@mui/material';
import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import styled from 'styled-components';
import MyTable from './components/MyTable';
import MyButtongroup from './components/MyButtongroup';
import MyCheckbox from './components/MyCheckbox';
import MyGrid from './components/MyGrid';
import MyDataGrid from './components/MyDataGrid';

const StyledButton = styled(Button)(({theme}) => ({
  color: 'blue',
  background: 'white'
}))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3> icon + button </h3>
        <Button>
          <HomeIcon />
        </Button>
        <h3> styled btton only one </h3>
        <Button style={{color:'blue', backgroundClor: 'white'}}>
          Styled Button
        </Button>
        <h3> styled btton </h3>
        <StyledButton> common Styled Button 1</StyledButton>
        <StyledButton> common Styled Button 2</StyledButton>
        <StyledButton> common Styled Button 3</StyledButton>
        <h3> btton group </h3>
        <MyButtongroup />
        <h3> checkbox </h3>
        <MyCheckbox />
        <h3> table </h3>
        <MyTable />
        <h3> data grid </h3>
        <MyDataGrid />
        <h3> grid </h3>
        <MyGrid />
      </header>
    </div>
  );
}

export default App;
