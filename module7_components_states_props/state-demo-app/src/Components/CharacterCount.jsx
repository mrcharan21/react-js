import React, { useState } from 'react'

export default function CharacterCount() {
    const[count, setCount] = useState ("");
  return (
    <>
    <textarea style={{width: '500px'}} value={count} onChange={(e)=>setCount(e.target.value)} />
        <p>Characters : {count.length}</p>
    </>    
)
}
