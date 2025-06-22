import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

export default function Sub3() {
  const theme = useContext(ThemeContext);
  return (
    <div className="context-test" style={theme}>
      <h2> sub3 </h2>
    </div>
  )
}
