import React, { useState } from 'react'

export default function InputField() {
    const[text, setText] = useState("rudra");
  return (
    <>
    <input value={text} onChange={(e) => setText(e.target.value)} />
    <p>You typed : {text}</p>
    </>
  )
}
