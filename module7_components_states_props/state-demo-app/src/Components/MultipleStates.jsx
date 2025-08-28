import React, { useState } from 'react'

export default function MultipleStates() {
    const[name , setName ] = useState("charan")
    const[age, setAge] = useState(23);

    const update= ()=> {
      setName("rudra");
    } 
  return (
    <>
    <h2>{name} - {age}</h2>
    <button onClick={() => setAge(age +1)}>increase Age</button>
    <button className='ms-2 ' onClick={() => setAge(age -1)}>decrease Age</button>
    <button onClick={update}>Change name </button>

    </>
  )
}
