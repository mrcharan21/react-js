import React, { useState } from 'react'

export default function Dropdown() {
    const[option, setOption] = useState("React")
  return (
    <>
    <select value={option} onChange={(e)=>setOption(e.target.value)}>
        <option>React</option>
        <option>Angular</option>
        <option>Vue</option>
        <option>Bootstrap</option>
        <option>Node</option>

            <p>You selected : {option}</p>
    </select>
    
    </>
)
}
