import { useContext } from "react"
import { Theme } from "../constants"
import { ThemeContext } from "../context/ThemeContext"

export default function FooterComponent() {
  const {isDarkMode} = useContext(ThemeContext);
  return (
    <footer id="footer">
      <div style={{width: '100%', height: '80px', backgroundColor: isDarkMode ? Theme.mode.dark.bgColor : Theme.mode.light.bgColor, lineHeight: '80px', textAlign: 'center' }}>
        <span style={{fontSize: '20px', color: isDarkMode ? Theme.mode.dark.color : Theme.mode.light.color, fontWeight: '500'}}>Copywrite (C) 2025 TwoNine</span> 
      </div>
    </footer>
  )
}
