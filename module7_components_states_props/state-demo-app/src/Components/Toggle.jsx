import React, { useState } from 'react'

export default function Toggle() {
    const[show , setShow] = useState (false);
  return (
    <>
    <h2>{show ? "Showing" : "Hidden"}</h2>
    <button onClick={() => setShow(!show)}>Toggle</button>
    </>
  )
}
