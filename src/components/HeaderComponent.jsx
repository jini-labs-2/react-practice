import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Theme } from "../constants";

export default function HeaderComponent() {
  const {isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    console.log(isDarkMode);
  }
  return (
    <header id="header">
      <div style={{width: '100%', height: '80px', backgroundColor: isDarkMode ? Theme.mode.dark.bgColor : Theme.mode.light.bgColor, lineHeight: '80px', textAlign: 'center'}} >
        <span style={{fontSize: '24px', color: isDarkMode ? Theme.mode.dark.color : Theme.mode.light.color, fontWeight: '700'}}>useContext(theme, border, lang, setXxxx)</span> 
        <div>
          <button
            style={{position:"absolute", top: '20px', right: '20px', padding: '8px 16px', borderRadius: '8px'}} value="Mode" name="mode"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </header>
  )
}
