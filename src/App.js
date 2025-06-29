import { useRef, useState } from 'react';
import './App.css';
import LoginComponent from './LoginComponent';
import FormComponent from './FormComponent';

function App() {
  // count値の変化でレンダーリングされる。
  const [count, setCount] = useState(0);
  // countRef値の変化のみではレンダーリングされ無い
  const countRef = useRef(0);
  // レンダーリングたびに初期化される。
  let countVal = 0;

  const incrementCount = () => {
    setCount(count + 1);
  }

  const incrementCountRef = () => {
    countRef.current = countRef.current + 1;
  }

  const incrementCountVal = () => {
    countVal = countVal + 1;
  }

  console.log('rendering')
  return (
    <div className="App">
      <p>steat : {count}</p>
      <p>Ref: {countRef.current}</p>
      <p>Val: {countVal}</p>
      <button onClick={incrementCount}> count up </button>
      <button onClick={incrementCountRef}> count Ref up </button>
      <button onClick={incrementCountVal}> count val up </button>
      <br/>
      <hr/>
      <LoginComponent />
      <hr/>
      <FormComponent />
    </div>
  );
}

export default App;
