import './App.css';
import useInput from './hooks/useInput';

function App() {
  const [inputValue, handleChange] = useInput('別名');

  return (
    <div className="App">
      <input value={inputValue} onChange={handleChange} />
      <button> Ok </button>
    </div>
  );
}

export default App;
