import { useReducer } from 'react';
import './App.css';

function App() {
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
    countDispatch({type:'UP', scale: 1})
  }
  function downFn() {
    countDispatch({type:'DOWN', scale: 1})
  }
  function resetFn() {
    countDispatch({type:'RESET'})
  }

  return (
    <div className="App">
      <h1>Current count : {count}</h1>
      <button onClick={upFn}>Count UP</button>
      <button onClick={downFn}>Count DOWN</button>
      <button onClick={resetFn}>Reset Count</button>
    </div>
  );
}

export default App;
