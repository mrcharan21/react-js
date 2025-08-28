import React, { useState } from 'react'

export default function FormWithMultipleFields() {
    const[form, setForm] = useState({
        fname: "",
        lname: ""
    });
  return (
    <>
        <div className='mx-auto p-2 text-center mt-4  '>
        <input placeholder="First Name *" value={form.fname} onChange={(e)=> setForm({...form, fname: e.target.value})}/>
     </div>
             <div className='mx-auto p-2 text-center form-input mt-2   '>

        <input placeholder='Last Name *' value={form.lname} onChange={(e)=> setForm({...form,lname: e.target.value})}/>
        <p>{form.fname} {form.lname}</p>
        </div>
       
    </>    
)
}
