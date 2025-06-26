import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { ServeLangContext } from './context/ServeLangContext';
import { MyContext, MyContextValue } from './context/MyContext';
import { DEFAULT_SERVE_LANG, Theme } from './constants';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';
import './App.css';
import AuthProvider from './context/AuthProvider';
import UserAuth from './components/UserAuth/UserAuth';
import AuthButton from './components/UserAuth/AuthButton';
import AuthDisplay from './components/UserAuth/AuthDisplay';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <AuthProvider>
      <ThemeContext.Provider value={{...Theme, isDarkMode, setIsDarkMode}}>
        <ServeLangContext.Provider value={DEFAULT_SERVE_LANG}>
          <HeaderComponent />
          <div style={{textAlign: 'center'}}>
            <UserAuth />
            <AuthButton />
            <AuthDisplay />
          </div>
          <MyContext.Provider value={MyContextValue}>
            <ContentComponent />
          </MyContext.Provider>
          <FooterComponent />
        </ServeLangContext.Provider>
      </ThemeContext.Provider>
    </AuthProvider>
  );
}

export default App;
