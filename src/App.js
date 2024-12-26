import { useState } from 'react';
import './App.css';
import { useReducer } from 'react';

function App() {
  function countReducer() {
  }

  const [count, setCount] = useReducer(countReducer, 0)
  return (
    <div className="App">
      <h1>Current count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Count UP</button>
      <button onClick={() => setCount(count - 1)}>Count DOWN</button>
    </div>
  );
}

export default App;
