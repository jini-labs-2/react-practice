import React, { useState, useRef } from 'react'

export default function FormComponent() {
  // const [email, setEmail] = useState("");
  const emailRef = useRef();
  // const [password, setPassword] = useState("");
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log({ email, password })
    console.log(emailRef.current.value, passwordRef.current.value);

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          {/* <input id='email' type='email' onChange={(e) => setEmail(e.target.value)}/> */}
          <input ref={emailRef} id ='email' type='email' />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input ref={passwordRef} id='password' type='password' />
        </div>
        <div>
          <button type='submit'>ログイン</button>
        </div>
      </form>
      
    </div>
  )
}
