import { useContext } from 'react'
import Sub3 from './Sub3';
import { ThemeContext } from '../context/ThemeContext';

export default function Sub2() {
  const theme = useContext(ThemeContext);
  return (
    <div className="context-test" style={theme}>
      <h2> sub 2</h2>
        <Sub3 />
    </div>
  )
}
