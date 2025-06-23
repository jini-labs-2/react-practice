const { useState } = require("react");

export default function useForm() {
  const [formState, setFormState] = useState({
    name: '',
    age: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return {
    formState,
    handleChange
  };
}