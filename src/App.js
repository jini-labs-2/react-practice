import './App.css';
import InputForm from './components/InputForm';
import useInput from './hooks/useInput';

function App() {
  const [inputValue, handleChange] = useInput('別名');

  return (
    <div className="App">
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button> Ok </button>

      <hr style={{margin: "10px, 0"}}/>
      <h1>useForm</h1>
      <InputForm />

    </div>
  );
}

export default App;
