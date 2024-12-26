import { useContext } from 'react';
import './App.css';
import { createContext } from 'react';

const themeDefault={ border: '3px solid red'};
const themeContext = createContext(themeDefault);

const defaultServeLang = "jp";
const serveLangContext = createContext(defaultServeLang);

function App() {
  const theme = useContext(themeContext);
  console.log(theme);
  const serveLang = useContext(serveLangContext);
  return (
    <themeContext.Provider value={{border: '3px solid blue'}}>
      <serveLangContext.Provider value={serveLang}>
      <div className="App context-test" style={theme}>
        <h1>Hellow world</h1>
        <Sub1 />
        <h2> Service Language is {serveLang}</h2>
      </div>
      </serveLangContext.Provider>
    </themeContext.Provider>
  );
}

function Sub1() {
  const theme = useContext(themeContext);
  const serveLang = useContext(serveLangContext);
  return (
    <themeContext.Provider value={{border: '3px solid green'}}>
      <div className="context-test" style={theme}>
        <h2> sub1 </h2>
        <Sub2 />
        <h2>service language is {serveLang}</h2>
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
