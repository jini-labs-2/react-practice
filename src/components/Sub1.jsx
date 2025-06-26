import { useContext, useState } from 'react'
import Sub2 from './Sub2';
import { ThemeContext } from '../context/ThemeContext';
import { ServeLangContext } from '../context/ServeLangContext';
import { MyContext } from '../context/MyContext';

export default function Sub1() {
  const theme = useContext(ThemeContext);
  const serveLang = useContext(ServeLangContext);
  const myContext = useContext(MyContext);

  const [localData, setLocalData] = useState("");

  const handleContextContent = () => {
    alert("change content in MyContext.");
    myContext.content = localData;
    setLocalData("");
  }

  return (
    <div className="context-test" style={theme}>
      <h2> sub1 </h2>
      <Sub2 />
      <h2>service language is {serveLang}</h2>
      <h4>info: {myContext.info}, content: {myContext.content}</h4>
      <input type='text' value={localData} onChange={(e) => setLocalData(e.target.value)}/>
      <button onClick={handleContextContent}>context content 変更</button>
    </div>
  )
}
