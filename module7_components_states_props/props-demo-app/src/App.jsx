// import React from 'react'

// export default function App() {
//   return (
//     <img 
//       className='img-fluid'
//       src='https://i.imgur.com/7vQD0fPs.jpg'
//       alt='React Logo'

//       />
//   )
// }


// import React from 'react'

// export default function App() {
//   const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
//   const description = 'React Logo';

//   return (
//     <img 
//       className='img-fluid'
//       src={avatar}
//       alt={description}

//     />
//   )
// }

// import React from 'react'

// export default function App() {
//   const name = 'charan'

//   return (
//       <h1>My name is {name} </h1>    
//   )
// }


// import React from 'react'

// const today = new Date();

// function formatDate(date){
//   return new Intl.DateTimeFormat(
//     'en-US',
//     {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'}
//   ).format(date)
// }

// export default function App() {
//   return (
//     <h2>To do list for {formatDate(today)}</h2>
//   )
// }


// import React from 'react'

// const person = {
//   name : 'charan',
//   theme : {
//     backgroundColor: 'black',
//     color: 'white'
//   }
// };

// export default function App() {
//   return (
//     <div style={person.theme}>
      
//       <h2>{person.name}</h2>
//       <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="logo" className='avatar' />

//       <ul>
//         <li>Improve the coding </li>
//         <li>Learn React</li>
//         <li>Build a project</li>
//         <li>Get a job</li>
//       </ul>
//     </div>
//   );
// }



import React from 'react'
import PropsComponent from './PropsComponent'

export default function App() {
  return (
    <>
        <PropsComponent name='charan' age={23} isStudent= {true} />
        <PropsComponent name='vasu' age={44} isStudent = {false} />
        <PropsComponent name='sandy' age={25} isStudent ={true} />
        <PropsComponent name='karthik' age={26} isStudent ={true} />
        <PropsComponent name='Rudra'/>
    </>
  )
}
