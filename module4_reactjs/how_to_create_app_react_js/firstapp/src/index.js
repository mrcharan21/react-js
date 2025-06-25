import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from 'react-dom/client'

// const a = parseFloat(prompt("Enter first number"));
// const b = parseFloat(prompt("Enter second number"));

// const addition = a + b;
// alert(`Addition: ${addition}`);

// const subtraction = a - b;
// alert(`Subtraction: ${subtraction}`);

// const multiplication = a * b;
// alert(`Multiplication: ${multiplication}`);

// const division = b !== 0 ? a / b : "Cannot divide by zero";
// alert(`Division: ${division}`);

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(
//   <>
//     <h1>Hii charan</h1>
//     <h1>Welcome to React js</h1>
//     <p>Addition of numbers: {addition}</p>
//     <p>Subtraction of numbers: {subtraction}</p>
//     <p>Multiplication of numbers: {multiplication}</p>
//     <p>Division of numbers: {division}</p>
//   </>
// )


// singel html rendering
 const demo = ReactDOM.createRoot(document.getElementById('root'))

demo.render(
  <StrictMode>
   <h1>Hii charan</h1>
    <h1>Welcome to React js</h1>
    <p>This is a single HTML rendering example.</p>

  </StrictMode>
 )


// const demo = createRoot(document.getElementById('root'))

// demo.render(
//   <StrictMode>
//     <h1>Hii charan</h1>
//     <h1>Welcome to React js</h1>
//     <p>This is a single HTML rendering example.</p>
//   </StrictMode>
// )

// multiple html rendering
// const demo = createRoot(document.getElementById('root'))

// demo.render(//   <StrictMode>
//     <h1>Hii charan</h1>
//     <h1>Welcome to React js</h1>
//     <p>This is a multiple HTML rendering example.</p>
//     <p>React allows you to render multiple elements in a single root.</p>
//     </StrictMode>
// )


// multiple html rendering with variables
// const demo = createRoot(document.getElementById('root'))
// const title = "Hii charan";
// const subtitle = "Welcome to React js";
// const description = "This is a multiple HTML rendering example with variables.";  
// const additionalInfo = "React allows you to render multiple elements in a single root.";

// demo.render(
//   <StrictMode>
//     <h1>{title}</h1>
//     <h1>{subtitle}</h1>
//     <p>{description}</p>
//     <p>{additionalInfo}</p>
//   </StrictMode>
// )

// multiple html rendering with variables and functions
// const demo = createRoot(document.getElementById('root'))
// const title = "Hii charan";
// const subtitle = "Welcome to React js"; 
// const description = "This is a multiple HTML rendering example with variables.";  
// const additionalInfo = "React allows you to render multiple elements in a single root.";  

// const getGreeting = () => "Hello, this is a greeting from a function!";
// const getCurrentDate =() => new Date().toLocaleDateString();
// const getCurrentTime = () => new Date().toLocaleTimeString();

// demo.render(
//   <StrictMode>
//     <h1>{title}</h1>
//     <h1>{subtitle}</h1>
//     <p>{description}</p>
//     <p>{additionalInfo}</p>
//     <p>{getGreeting()}</p>
//     <p>Current Date: {getCurrentDate()}</p>
//     <p>Current Time: {getCurrentTime()}</p>
//   </StrictMode>
// );


// const myFirstElement = <h1>
//   Hii charan, Welcome to React JS!
// </h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(myFirstElement);
































