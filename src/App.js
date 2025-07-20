import { useLayoutEffect, useState } from 'react';
import './App.css';

function App() {
  const [ initValue, setInitValue ] = useState("");

  // useEffect(() => {
  // -> init値を設定あとでレンダー
  //    ちらつき現象をなくす
  useLayoutEffect(() => {
    setInitValue('twonine');
  }, []);

  console.log("lender!")

  return (
    <div className="App">
      <p>inital is "{initValue}".</p>
      <p>inital is "{initValue}".</p>
      <p>inital is "{initValue}".</p>
      <p>inital is "{initValue}".</p>
      <p>inital is "{initValue}".</p>
      <p>inital is "{initValue}".</p>
      <p>inital is "{initValue}".</p>
    </div>
  );
}

export default App;
