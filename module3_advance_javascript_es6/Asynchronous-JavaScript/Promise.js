// JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states
// : pending, fulfilled, or rejected.

// Creating a Promise
// You can create a Promise using the Promise constructor, which takes a function with two parameters: resolve and reject.

// const myPromise = new Promise((resolve , reject)=>{
//     const success = false; // Simulating an asynchronous operation
//     if(success){
//         resolve("Promise fulfilled successfully!");
//     } else {
//         reject("Promise rejected!");
//     }
// })

// myPromise
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


// const charan = new Promise((resolve , reject)=>{
//     const success = true; // Simulating an asynchronous operation
//     if(success){
//         resolve("Promise fulfilled successfully!");
//     } else {
//         reject("Promise rejected!");
//     }
// })

// charan
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


// Using Promises with Asynchronous Operations
// Promises are often used to handle asynchronous operations like fetching data from an API. Here's an example using the Fetch API, which returns a Promise.

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Data fetched successfully:', data);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });


// Async/Await Syntax
// Async/await is a more modern way to work with Promises, making asynchronous code look and behave more like synchronous code. You can use the async keyword to define an asynchronous function and the await keyword to wait for a Promise to resolve.

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log('Data fetched successfully:', data);
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//     }
// }
// fetchData();


// async function fetchData() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts/2');
//         if(!res.ok) {
//             throw new Error ('Network sariga ledu or !res mistach iendi!');
//         } 
//         const ck = await res.json();
//         console.log('Data fetched succesfully' , ck);
//     } catch (error) {
//         console.error('There was a problem with fetch operation', error)
//     }
    
// }
// fetchData();


// Promise.all
// Promise.all is a method that takes an array of Promises and returns a single Promise that resolves when all of the input Promises have resolved, or rejects if any of them reject.

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });
// Promise.all([promise1, promise2, promise3])
//     .then(values => {
//         console.log(values); // [3, 42, "foo"]
//     })
//     .catch(error => {
//         console.error('One of the promises rejected:', error);
//     });

// const p1 = Promise.resolve(10);
// const p2 = 20;
// const p3 = new Promise((resolve , reject)=>{
//     setTimeout (resolve , 200 , 'hello world');
// });
// Promise.all([p1 , p2 , p3])
//     .then(values => {
//         console.log(values); // [10 , 20 , 'hello world']
//     })
//     .catch(error => {
//         console.error('One of the promises rejected:', error);
//     });


// async and await with form validation

// const validateForm = (formData) => {
//     return new Promise((resolve, reject) => {
//         const { username, password } = formData;
//         if (username && password) {
//             resolve("Form validation successful!");
//         } else {
//             reject("Form validation failed. Please fill in all required fields.");
//         }
//     });
// };

// const promptForCredentials = async () => {
//     // If running in a browser environment where prompt() exists, use it.
//     if (typeof prompt === "function") {
//         while (true) {
//             const username = prompt("Enter username:");
//             if (username === null) throw new Error("User cancelled");
//             const password = prompt("Enter password:");
//             if (password === null) throw new Error("User cancelled");
//             if (username && password) return { username, password };
//             alert("Both username and password are required. Please try again.");
//         }
//     }

//     // Fallback for Node.js terminal: use readline
//     const readline = require("readline");
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     });
//     const question = (q) =>
//         new Promise((resolve) => rl.question(q, (answer) => resolve(answer)));

//     try {
//         while (true) {
//             const username = await question("Enter username: ");
//             // In terminal, Ctrl+C will exit the process; treat empty input as retry
//             const password = await question("Enter password: ");
//             if (username && password) {
//                 rl.close();
//                 return { username, password };
//             }
//             console.log("Both username and password are required. Please try again.");
//         }
//     } finally {
//         // ensure interface is closed if something goes wrong
//         try { rl.close(); } catch (e) {}
//     }
// };

// const submitForm = async (initialData) => {
//     try {
//         const formData = initialData || (await promptForCredentials());
//         const validationMessage = await validateForm(formData);
//         console.log(validationMessage);
//         console.log("Form submitted successfully!");
//     } catch (error) {
//         console.error(error);
//     }
// };

// // Start the flow; this will prompt the user
// submitForm();
