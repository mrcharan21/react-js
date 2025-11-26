import React, { useState } from 'react'

export default function ArrayState() {
    const[items, setItems] = useState(['1']);
  return (
    <>
    <ul>
        {items.map((i, index ,)=>
        <li key={index}>{i}</li>)}
    </ul>
    </>
  )
}
