/*
How to define an array in JavaScript?
array defined three ways:
1. Using array literal notation: This is the most common way to define an array in JavaScript. 
You can create an array by enclosing a comma-separated list of values in square brackets [].
   Example: 
   let fruits = ['apple', 'banana', 'orange'];

2. Using the Array constructor: You can create an array using the Array constructor, which is a built-in JavaScript function.
   Example:
   let numbers = new Array(1, 2, 3, 4, 5);   

3. Using array object notation: You can also create an array using the Array object notation, which is similar to the Array constructor.
   Example:
    let colors = Array('red', 'green', 'blue');
// Note: This method is less commonly used and is not recommended for creating arrays in modern JavaScript.


*/

// 1. Using array literal notation
let fruits = ['apple', 'banana', 'orange'];
// Accessing elements in the array
console.log(fruits[0]);

//2. Using the Array constructor notation
let numbers = new Array(1, 2, 3, 4, 5);
// Accessing elements in the array
console.log(numbers[0]);


let colors = Array('red', 2, 'blue');
// Accessing elements in the array\
console.log(colors[1]);

// 3. Using array object notation
var arr= new Array(); //Empty array
console.log(arr.length); 