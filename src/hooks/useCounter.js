import { useState } from 'react'

export default function useCounter(initValue) {
  const [testCount, setTestCount] = useState(initValue);

    const increment = () => {
    setTestCount(prev => prev + 1);
  }
  const decrement = () => {
    setTestCount(prev => prev - 1);
  }
  const reset = () => {
    setTestCount(0);
  }

  return {testCount, increment, decrement, reset};
}
