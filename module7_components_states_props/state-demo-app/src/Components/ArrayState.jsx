// import React, { useState } from 'react'

// export default function ArrayState() {
//     const[items, setItems] = useState(['1']);
//   return (
//     <>
//     <button onClick={()=> setItems([...items, `Item ${items.length + 1}`])}>Add item</button>
//     <ul>
//         {items.map((i, index ,)=>
//         <li key={index}>{i}</li>)}
//     </ul>
//     </>
//   )
// }

// import React from 'react'

// export default function ArrayState() {
//   const[items, setItems] = React.useState(['1']);
//   return (
//     <>
//     <button onClick={()=> setItems([...items , `Item ${items.length + 1 }`])} >Add Items</button>  
//     <ul>
//         {items.map((i, index) => (
//           <li key={i.id || index}>{i}</li>
//         ))}
//     </ul>
//     </>
//   )
// }


// import React from 'react'

// export default function ArrayState() {
//   const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
//   return (
//     <>
//       <ul>
//         {fruits.map((fruit, index)=>(
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>
//     </>
//   )
// }


// import React from 'react'

// export default function ArrayState() {
  
//     const names = ['charan', 'Nithin' , 'vasu', 'tops']  

//   return (
//     <>
//     <ul>
//     {names.map((peru, index)=>(
//       <li key={index}>{peru}</li>
      
//     ))}
//     </ul>
//     {console.log(names)}
//     {console.log(names.indexOf('tops'))}
//     {console.log(names.length)}
//     </>
//   )
// }



// import React from 'react'

// export default function ArrayState() {
//   const users = [
//     {id: 1, name: 'charan'},
//     {id: 2, name: 'rudra'},
//     {id: 3, name: 'kiran'},
//     {id: 4, name: 'debba'}
//   ];
//   return (
//     <>
//     <ul>
//       {users.map((u)=>(
//         <li key={u.id}>{u.name}</li>
//       ))}
//     </ul>
//     {console.log(JSON.stringify(users))}
//     </>
//   )
// }



import React from 'react'

export default function ArrayState() {
  const products = [
    {id : 1 , name : "perfume" , price : 899},
    {id : 2 , name : "Flower" , price : 200},
    {id: 3 , name : "shoes" , price : 2500}
  ];
  return (
    <>
    <ul>
      {products.map((p, index) => (
        <li key={p.id || index}>
          <strong>{p.name}</strong> - {p.price}
        </li>
      ))}
    </ul>
    </>
  )
}
