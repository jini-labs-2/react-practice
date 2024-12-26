import { useReducer, useState } from 'react';
import './App.css';

function App() {
  const [scale, setScale] = useState(1);
  function countReducer(current, action) {
    console.log('--s0000--', current, action)
    switch(action.type) {
      case 'UP':
        return current + action.scale;
      case 'DOWN':
        return current - action.scale;
      case 'RESET':
        return 0;
      default:
        break;
    }
  }

  const [count, countDispatch] = useReducer(countReducer, 0)
  function upFn() {
    countDispatch({type:'UP', scale})
  }
  function downFn() {
    countDispatch({type:'DOWN', scale})
  }
  function resetFn() {
    countDispatch({type:'RESET'})
  }

  function handleScale(event) {
    console.log('--s0200--',event)
    setScale(Number(event.target.value))
  }

  return (
    <div className="App">
      <div>
        <h1>Current count : {count}</h1>
      </div>
      <div>
        <button onClick={upFn}>Count UP</button>
        <button onClick={downFn}>Count DOWN</button>
        <button onClick={resetFn}>Reset Count</button>
      </div>
      <div>
        <input type='number' value={scale} onChange={handleScale}/>
      </div>
    </div>
  );
}

export default App;
