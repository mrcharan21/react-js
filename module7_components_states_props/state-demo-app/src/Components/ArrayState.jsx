import React, { useState } from 'react'

export default function ArrayState() {
    const[items, setItems] = useState(['1']);
  return (
    <>
    <button onClick={()=> setItems([...items, `Item ${items.length + 1}`])}>Add item</button>
    <ul>
        {items.map((i, index ,)=>
        <li key={index}>{i}</li>)}
    </ul>
    </>
  )
}
