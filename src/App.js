import { useEffect, useState } from 'react';
import './App.css';

let searchResultTest = [
  { id: 0, name: "なまえ"},
  { id: 1, name: "なまえ"},
  { id: 2, name: "なまえ"}
];

function App() {
  const [timeCount, setTimeCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleChange = async (e) => {
    setInputValue(e.target.value);

    setSearchResult(null);
    const fetchedData = await fetch("https://jsonplaceholder.typicode.com/users").
      then(async (res) => {
        return await res.json();
    });
    searchResultTest = fetchedData ? fetchedData.map(({id, name}) => { return {id, name}}) : null;
    setSearchResult(searchResultTest);
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
      <div>
        {searchResult ? searchResult.map((res, idx) => (
          <p key={`${idx}_${res.name}`}>{idx},{res.name}</p>
        )) : null}
      </div>
    </div>
  );
}

export default App;
