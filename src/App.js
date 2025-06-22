import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { ServeLangContext } from './context/ServeLangContext';
import { DEFAULT_SERVE_LANG, Theme } from './constants';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';
import './App.css';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{...Theme, isDarkMode, setIsDarkMode}}>
      <ServeLangContext.Provider value={DEFAULT_SERVE_LANG}>
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
      </ServeLangContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
