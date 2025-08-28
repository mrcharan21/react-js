import React, { useState } from 'react'

export default function DarkMode() {
    const[dark,setDark] = useState(true)
  return (
    <>
    <div style={{background: dark ? "black" : "white", color : dark ? 'white' : 'black' , height : "100vh"}}>
        <h2>{dark ? "DarkMode" : "Light mode"}</h2>
        <button onClick={()=> setDark(!dark)}>Toggle Theme</button>
    </div>
    </>    
)
}
