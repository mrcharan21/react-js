import React, { useState } from 'react'

export default function ShowHidePassword() {
    const[visible, setVisible] = useState(false);
  return (
    <>
    <input type={visible ? "text" : 'password'}/>
    <button onClick={()=>setVisible(!visible)}>Show/Hide</button>
    </>    
)
}
