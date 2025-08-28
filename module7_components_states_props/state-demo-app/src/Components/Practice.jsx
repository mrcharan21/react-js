// import React, { useState } from 'react'

// export default function Practice() {
//     const[increases, setIncreases] = useState(0)
//   return (
//     <>
//     <div className='ms-auto p-3 mt-4 '>
//     <p className='ms-5 fs-3'>{increases}</p>
//     <button className='ms-3 btn btn-secondary'  onClick={()=>setIncreases(increases +1)}>Increases</button>
//     <button className='ms-3 btn btn-secondary' onClick={()=>setIncreases(increases -1)}>Decreases</button>
//     <button className='ms-3 btn btn-secondary' onClick={() => setIncreases(0)}>Reset</button>
//     </div>
//     </>
//   )
// }


// import React, { useState } from 'react'

// export default function Practice() {
//     const[toggle, setToggle] = useState(false)
//   return (
//     <>
//     <p>{toggle ? "ON" : "OFF"}</p>
//     <button onClick={()=>setToggle(!toggle)}>ON/OFF</button>
//     </>
//   )
// }


// import React, { useState } from 'react'

// export default function Practice() {
//     const[data, setData] =useState({
//         fname : " ", lname : " "
//     }
//     );
//   return (
//     <>
//     <div className='mt-3 p-2 ms-4 text-dark '>
//         <input type="text" placeholder='Enter First Name*' value={data.fname}  onChange={(e)=>setData({...data, fname: e.target.value})} />
//         <input type="text" placeholder='Enter last Name' value={data.lname}  onChange={(e)=>setData({...data, lname: e.target.value})}/>
//     </div>
//     <p>Full Name: {data.fname} {data.lname}</p>
//     </>
//   )
// }



// import React, { useState } from 'react'

// export default function Practice() {
//     const[text, setText] =useState (" ")
//   return (
//     <>
//     <input type="text" placeholder='Type SomeThing...' value={text} onChange={(e)=> setText(e.target.value)} />

//     <p>You typed : {text}</p>
//     </>
//   )
// }


// import React, { useState } from 'react'

// export default function Practice() {
//     const[data, setData] =useState({
//         name : " ", email : " "
//     });

//     const [submitted,setSubmitted] = useState(null);

//     const handleSubmit=() =>{
//         setSubmitted(data);
//     }
//   return (
// <>
//     <input type="text" placeholder='Enter your Name' value={data.name} onChange={(e)=>setData({...data, name:e.target.value})} />
        
//     <input type="text" placeholder='Enter your email' value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} />

//     <button onClick={(handleSubmit)}>Submit</button>

//     {submitted && (
//         <p>Name : {submitted.name}
//         <br />
//         Email: {submitted.email}
//         </p>
//     )}
// </> 

// )
// }

import React, { useState } from 'react'

export default function Practice() {
    const [show , setShow] =useState(false);
    const [password, setPassword] = useState("")
  return (
<>
   <div>
    <input type={show ? "text" : "password"} placeholder='Enter a value ' value={password} onChange={(e)=>setPassword(e.target.value)}/>

    <button onClick={()=>setShow(!show)}>{show ? "Hide" : "Show"}</button>
   </div>
</>  )
}
