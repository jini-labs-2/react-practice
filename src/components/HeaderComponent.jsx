import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function HeaderComponent() {
  const {isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    console.log(isDarkMode);
  }
  return (
    <div style={{width: '100%', height: '80px', backgroundColor: '#ccc', lineHeight: '80px', textAlign: 'center'}}>
      <span style={{fontSize: '24px', color: '#202020', fontWeight: '700'}}>useContext(theme, border, lang, setXxxx)</span> 
      <div>
        <button
          style={{position:"absolute", top: '20px', right: '20px', padding: '8px 16px', borderRadius: '8px'}} value="Mode" name="mode"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Dark Mode' : 'White Mode'}
        </button>
      </div>
    </div>
  )
}
