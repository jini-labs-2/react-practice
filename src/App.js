import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [timeCount, setTimeCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [])

  return (
    <div className="App">
      <p style={{textAlign:'center'}}>経過：{timeCount}</p>
    </div>
  );
}

export default App;
