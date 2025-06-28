import React, { useRef, useEffect } from 'react'

function LoginComponent() {
  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  },[]);

  const onSubmit = () => {
    alert(`input email is ${emailRef.current.value}.`);
  }

  return (
    <div>
      <input
        ref={emailRef}
        type='email' 
        placeholder='input you email.'
      />
      <button onClick={onSubmit}>Login</button>
    </div>
  )
}

export default LoginComponent