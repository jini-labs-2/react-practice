import './App.css';
import useInput from './hooks/useInput';

function displayMessage(message) {
  alert(message)
}

function App() {
  const [inputValue, handleChange, handleSubmit] = useInput('別名', displayMessage);

  return (
    <div className="App">
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} /> <br/>
      <button onClick={handleSubmit}> Ok </button>
    </div>
  );
}

export default App;
