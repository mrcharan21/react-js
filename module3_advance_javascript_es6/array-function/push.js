/*
Push method adds one or more elements to the end of an array and returns the new length of the array.
It modifies the original array.

*/

var arr = ["charan","kumar","Teja", "Ram"];
console.log("Before push: " + arr);
console.log("New length after push:" + arr.push("Ravi","kiran"));
console.log("After push: " + arr);
console.log(arr);
console.log(JSON.stringify(arr)); // This will print the array in JSON format
console.log(arr.toString()); // This will print the array as a string
console.log(arr[0]);
