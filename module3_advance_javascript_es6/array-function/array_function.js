/*
array functions:

1. Array.prototype.push() - Adds one or more elements to the end of an array and returns the new length of the array.

syntax: array.push(element1, element2, ..., elementN)
*/
// Example:
// var arr = ["charan", "kumar", "Teja", "Ram"];
// var arr2 = ["Ravi", "kiran"];
// console.log(...arr, ...arr2);

/*
2. Array.prototype.pop() - Removes the last element from an array and returns that element. This method changes the length of the array.
syntax: array.pop()
*/
// Example:
// var arr3 = ["charan", "kumar", "Teja", "Ram"];

// console.log(arr3.pop());
// console.log(arr3);

/*
3. Array.prototype.shift() - Removes the first element from an array and returns that element. This method changes the length of the array.
syntax: array.shift()
*/
// Example:
// var arr4 = ["charan", "kumar", "Teja", "Ram"];
// console.log("Before shift:", arr4);
// console.log(arr4.shift()); // // This will remove the first element "charan" from the array
// console.log("After shift:",  arr4);

/*
4. Array.prototype.unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
syntax: array.unshift(element1, element2, ..., elementN)
*/
// Example:
// var arr5 = ["charan", "kumar", "Teja", "Ram"];
// console.log("Before unshift:", arr5);
// console.log(arr5.unshift("vasu", "NANDU")); // This will add "vasu" and "NANDU" to the beginning of the array
// console.log("after unshift:", arr5);

/*
5. Array.prototype.concat() - Merges two or more arrays and returns a new array. This method does not change the existing arrays.
syntax: array1.concat(array2, array3, ..., arrayN)
*/
// Example:
// var arr6 = ["charan", "kumar", "Teja", "Ram"];
// var arr7 = ["Ravi", "kiran"];
// var arr8 = ["John", "Doe"];
// var arr9 = arr6.concat(arr7, arr8); // Merging two arrays using concat method
// console.log(arr9);
// console.log(JSON.stringify(arr9));

// var arr9 = arr6.concat(...arr6, ...arr7, ...arr8) //This is a spread operator example

// console.log(arr9);

/*6. Array.prototype.slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
syntax: array.slice(start, end)
*/
// Example:
// var arr10 = ["charan", "kumar", "Teja", "Ram"];
// var arr11 = arr10.slice(1, 2); // This will return a new array with elements from index 1 to index 2 (end not included)
// console.log(arr11);
// console.log(arr10); // Original array remains unchanged
// var arr12 = arr10.slice(1); // This will return a new array with elements from index 1 to the end of the array
// console.log(arr12);

/*7. Array.prototype.splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements.
syntax: array.splice(start, deleteCount, item1, item2, ...)
*/





8. //Array.isArray(): Checks if a value is an array.

function isArray(value) {
    return Array.isArray(value);
}

// Example:
console.log(isArray([1, 2, 3])); // true
console.log(isArray("Hello")); // false
console.log(isArray({})); // false
console.log(isArray(null)); // false
console.log(isArray(undefined)); // false
console.log(isArray(123)); // false
console.log(isArray([])); // true
console.log(isArray(new Array())); // true
console.log(isArray(new Array(1, 2, 3))); // true
console.log(isArray(new Array("Hello", "World"))); // true
console.log(isArray(new Array(1, "Hello", true))); // true
console.log(isArray(new Array(null, undefined))); // true
console.log(isArray(new Array({}))); // true