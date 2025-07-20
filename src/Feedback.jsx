import React, { useState } from 'react'

const Feedback = () => {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSent(false);
    await sendingMessage(text);
    setIsSent(true);
    setIsSending(false);
  }

  if (isSent) {
    return (
      <div>
        Thank you for your Feedback!
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <textarea disabled={isSending} value={text} onChange={e => setText(e.target.value)}></textarea>
        <button type='submit'>送信</button>
      </form>
      {isSending && <p>sending message!!</p>}

    </div>
  )
}

const sendingMessage = async () => {
  return new Promise(resolve => {
    setTimeout(resolve, 3000);
  })
}

export default Feedback