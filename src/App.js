import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Current count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Count UP</button>
      <button onClick={() => setCount(count - 1)}>Count DOWN</button>
    </div>
  );
}

export default App;
