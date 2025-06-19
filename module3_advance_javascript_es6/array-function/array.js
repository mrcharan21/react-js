/*
What is an array?
An array is a simple variable that we can use to store multiple data in a single variable.
It is a a collection of items that can be of any type,
including numbers,strings,objects,functions and even other arrays.
It is a data structure that allows us to store and manipulate a list of values.
Arrays are zero-indexed, meaning the first element is at index 0.
Arrays are mutable, meaning we can change their contents after they are created.

types of arrays:
1. Indexed arrays: An array where each element is accessed by a numeric index, starting from 0.
2. Associative arrays: An array where each element is accessed by a string key,rather rhan a numberic index.
(Note:In javaScript, associative arrays are actually objects, as JavaScript does not have a built-in associative array type.)
3. Multidimensional arrays: An array that contains other arrays as its elements, allowing for the creation of complex data structures like matrices or tables.
*/


// Example of an indexed array
let fruits = ['apple', 'banana', 'orange', 'grape'];
// Accessing elements in an indexed array
console.log(fruits[0]);


// Example of an associative array (object in JavaScript)
let person = {
    name: "charan",
    age: 23,
    city: "hyderabad"
};
console.log(person);
console.log(person.name); // Accessing elements in an associative array (object)


// Example of a multidimensional array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);
// Accessing elements in a multidimensional array
console.log(matrix[1][2]); // Accessing the element at row 1, column 2 (which is 6)

// Example of an array with mixed data types
let mixedArray = [42, "hello", true, { key: "value" }, [1, 2, 3]];
console.log(mixedArray);    

// Accessing elements in a mixed array
console.log(mixedArray[3].key); // Accessing the key in the object

