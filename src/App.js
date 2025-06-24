import './App.css';
import useInput from './hooks/useInput';

function App() {
  const [inputValue, handleChange] = useInput('別名');
  const [inputValue2, handleChange2] = useInput('アドレス');

  const handleSubmit = () => {
    alert('Input value is "', inputValue, '"')
  }

  return (
    <div className="App">
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} /> <br/>
      <input value={inputValue2} onChange={handleChange2} /> <br/>
      <button onClick={handleSubmit}> Ok </button>
    </div>
  );
}

export default App;
