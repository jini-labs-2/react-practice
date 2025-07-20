import { useEffect, useState, useTransition } from 'react';
import './App.css';

async function sleep(delaySecond) {
  return new Promise((r) => setTimeout(r, delaySecond * 1000));
}

const getData = async (param) => {
  let result = null;
  await sleep(5);
  try {
    result = await fetch(`https://jsonplaceholder.typicode.com/${param}`);
    return await result.json();
  } catch(error) {
    console.log('fetch error\n', error);
    return null;
  }
}

function App() {
  const [timeCount, setTimeCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [searchedResult, setSearchedResult] = useState(null);
  const [isLoading, startTransitioin] = useTransition();

  const handleChange = (e) => {
    setInputValue(e.target.value);

    startTransitioin(async () => {
      setSearchedResult(null);
      const result = await getData('users');
      const filteredResult = result ? result?.map(({id, name}) => { return {id, name}}) : null;
      setSearchedResult(filteredResult);
    })
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="App">
      <p style={{textAlign:'center'}}>経過：{timeCount}</p>

      <input
        value={inputValue}
        onChange={handleChange} />
      <br/>
      <label>検索結果</label>
      { isLoading ? <p style={{backgroundColor: "green", color:"red"}}>..... loading ....</p>
        : <div>{searchedResult ? searchedResult.map((res, idx) => (
            <p key={`${idx}_${res.name}`}>{idx},{res.name}</p>
          )) : null}
        </div>
      }
    </div>
  );
}

export default App;
