import { useState } from "react";

export default function useInput(initValue, submitAction) {
  const [inputValue, setInputValue] = useState(initValue);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = () => {
    setInputValue("");
    submitAction(inputValue)
  }

  return [inputValue, handleChange, handleSubmit];
}
