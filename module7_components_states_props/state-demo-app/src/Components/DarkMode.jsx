// import React, { useState } from 'react'

// export default function DarkMode() {
//     const[dark,setDark] = useState(true)
//   return (
//     <>
//     <div style={{background: dark ? "black" : "white", color : dark ? 'white' : 'black' , height : "100vh"}}>
//         <h2>{dark ? "DarkMode" : "Light mode"}</h2>
//         <button onClick={()=> setDark(!dark)}>Toggle Theme</button>
//     </div>
//     </>    
// )
// }


import React from 'react'

export default function DarkMode() {
  const [chikati , setChikati] = React.useState(true);

  return (
    <>
    <div style={{background: chikati ? "black" : "white", color: chikati ? "white" : "black", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h2>{chikati ? "Veskovali" : "kotukovali"}</h2>
      <button onClick={() => setChikati(!chikati)} className='rounded bg-primary text-white p-2'>Debba theme</button>
    </div>
    </>
  )
}
