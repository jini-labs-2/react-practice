import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { MyContext } from '../context/MyContext';

export default function Sub3() {
  const theme = useContext(ThemeContext);
  const myContext = useContext(MyContext)
  return (
    <div className="context-test" style={theme}>
      <h2> sub3 </h2>
      <h3>info: {myContext.info}, content: {myContext.content}</h3>
    </div>
  )
}
