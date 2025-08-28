import React, { useState } from 'react'

export default function CountingApp() {
    const [emp , setEmp ] = useState({
        id : '1',
        fname : "charan",
        email: 'charan@gmail.com'
});

const update = ()=> {
  return  setEmp({
    ...emp,
    id : '2',
    fname : 'rudra',
    email : 'rudra@gmail.com'
  })
}

  return (
    <>
        
        <h2>{emp.id} - {emp.fname} - {emp.email}</h2>
        <button onClick={update}>click here </button>

    </>
  )
}
