import React, { useState } from 'react'

export default function Checkbox() {
    const[checked , setChecked] = useState(true);
  return (
    <>
    <input type="checkbox"
            checked= {checked}
            onChange={() => setChecked(!checked)}
    
    />
    <p>{checked ? "checked" : "not checked"}</p>
    </>
  )
}
