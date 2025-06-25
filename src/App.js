import { useEffect, useState } from 'react';
import './App.css';
import useInput from './hooks/useInput';
import useCounter from './hooks/useCounter';

function displayMessage(message) {
  alert(message)
}

function App() {
  const [inputValue, handleChange, handleSubmit] = useInput('別名', displayMessage);
  const [count, setCount] = useState(0);
  const {testCount, increment, decrement, reset} = useCounter(0);

  useEffect(() => {
    document.title = `${count}`
  }, [count])



  return (
    <div className="App">
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} /> <br/>
      <button onClick={handleSubmit}> Ok </button>
      
      <br/>
      <hr/>
      <div style={{fontSize: "3rem", padding: "2rem"}}>
        <button onClick={() => setCount(prev => prev + 1)} style={{fontSize: "inherit", padding: "0 1.5rem"}}> + </button>
        <span style={{padding: "1rem 3rem"}}> {count} </span>
        <button onClick={() => setCount(prev => prev - 1)} style={{fontSize: "inherit", padding: "0 1.5rem"}}> - </button>
      </div>

      <br/>
      <hr/>
      <div style={{fontSize: "3rem", padding: "2rem"}}>
        <button onClick={increment} style={{fontSize: "inherit", padding: "0 1.5rem"}}> + </button>
        <span style={{padding: "1rem 3rem"}}> {testCount} </span>
        <button onClick={decrement} style={{fontSize: "inherit", padding: "0 1.5rem"}}> - </button>
        <br/>
        <button onClick={reset} style={{fontSize: "inherit", padding: "0 1.5rem"}}> reset </button>
      </div>

    </div>
  );
}

export default App;
