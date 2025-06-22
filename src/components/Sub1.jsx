import { useContext } from 'react'
import Sub2 from './Sub2';
import { ThemeContext } from '../context/ThemeContext';
import { ServeLangContext } from '../context/ServeLangContext';

export default function Sub1() {
  const theme = useContext(ThemeContext);
  const serveLang = useContext(ServeLangContext);
  return (
    <div className="context-test" style={theme}>
      <h2> sub1 </h2>
      <Sub2 />
      <h2>service language is {serveLang}</h2>
    </div>
  )
}
