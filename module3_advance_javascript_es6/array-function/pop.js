/*
pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// Syntax: array.pop()

// Note: The pop() method modifies the original array by removing the last element.
// If you want to keep the original array intact, you can create a copy of the array
// before using the pop() method, like this:
// var arrCopy = [...arr]; 
// // Create a shallow copy of the array
*/

var arr = ['charan', 'kumar', 'rudra', 'praveen'];
var arrCopy = [...arr];
var res = arr.pop();
console.log(arr);
console.log(res); //The last element removed from the array
console.log(arr.length); //The length of the array after removing the last element
console.log(typeof arr); //The type of the array
console.log(JSON.stringify(arr)); //Converting the array to a JSON string for better readability
console.log(arrCopy); //The original array remains unchanged
console.log(arr[arr.length - 1]); //Accessing the last element of the array after pop() operation
console.log(arr[0]); //Accessing the first element of the array