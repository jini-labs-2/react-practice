import { useContext } from 'react';
import './App.css';
import { createContext } from 'react';

const themeDefault={ border: '3px solid red'};
const themeContext = createContext(themeDefault);

function App() {
  const theme = useContext(themeContext);
  console.log(theme);
  return (
    <themeContext.Provider value={{border: '3px solid blue'}}>
      <div className="App context-test" style={theme}>
        <h1>Hellow world</h1>
        <Sub1 />
      </div>
    </themeContext.Provider>
  );
}

function Sub1() {
  const theme = useContext(themeContext);
  return (
    <themeContext.Provider value={{border: '3px solid green'}}>
      <div className="context-test" style={theme}>
        <h2> sub1 </h2>
        <Sub2 />
      </div>
    </themeContext.Provider>
  )
}

function Sub2() {
  const theme = useContext(themeContext);
  return (
    <div className="context-test" style={theme}>
      <h2> sub 2</h2>
      <Sub3 />
    </div>
  )
}

function Sub3() {
  const theme = useContext(themeContext);
  return (
    <div className="context-test" style={theme}>
      <h2> sub3 </h2>
    </div>
  )
}

export default App;
