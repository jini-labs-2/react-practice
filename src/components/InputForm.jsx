import React from 'react'
import useForm from '../hooks/useForm';

export default function InputForm() {
  const {formState, handleChange} = useForm();
  return (
    <>
      <form>
        <label>Name:</label>
        <input
          type='text' name='name'
          value={formState.name}
          onChange={handleChange}
        /><br/>
        <label>Age:</label>
        <input
          type='number' name='age'
          value={formState.age}
          onChange={handleChange}
        /><br/>
        <label>Gender:</label>
        <input
          type='text' name='gender'
          value={formState.gender}
          onChange={handleChange}
        /><br/>
      </form>
    </>
  )
}
