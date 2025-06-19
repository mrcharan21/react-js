/*
Spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected, or an array-like object to be expanded in places where zero or more elements are expected.
Spread is merging two or more arrays into one array.
It is also used to copy an array or object.
*/

var arr1 = ["charan", "kumar", "Teja", "Ram"];
var arr2 = ["Ravi", "kiran"];
var arr4 = ["John", "Doe"];
var arr3 = [...arr1, ...arr2, ...arr4]; // Merging two arrays using spread operator
console.log(arr3);
console.log(JSON.stringify(arr3)); // This will print the merged array in JSON format

//In this example, we are merging two arrays arr1 and arr2 into a new array arr3 using the spread operator. The spread operator takes each element from both arrays and combines them into a single array.
//The resulting array arr3 will contain all elements from arr1 followed by all elements from arr2.