import './App.css';
import Sub1 from './components/Sub1';
import { ThemeContext } from './context/ThemeContext';
import { ServeLangContext } from './context/ServeLangContext';
import { DEFAULT_SERVE_LANG, DEFAULT_THEME } from './constants';

function App() {
  return (
    <ThemeContext.Provider value={DEFAULT_THEME}>
      <ServeLangContext.Provider value={DEFAULT_SERVE_LANG}>
      <div className="App context-test" style={DEFAULT_THEME}>
        <h1>Hellow world</h1>
        <Sub1 />
        <h2> Service Language is {DEFAULT_SERVE_LANG}</h2>
      </div>
      </ServeLangContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
