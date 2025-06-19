/*
Define concat() method
The concat() method is used to merge two or more arrays.
It does not change the existing arrays but instead returns a new array.
It can also be used to concatenate values to an array.
// Syntax: array1.concat(array2, array3, ..., value1, value2, ...)
// Parameters:
// - array2, array3, ...: The arrays to be concatenated.
// - value1, value2, ...: Additional values to be concatenated to the array.
// Returns: A new array that is the result of concatenating the specified arrays and values.
*/
// var arr = ['charan', 'kumar', 'rudra', 'praveen'];
// var res = arr.concat('karthik','sai','krishna');
// console.log(res);
// console.log(typeof res);



var arr = ['charan', 'kumar', 'rudra', 'praveen'];
var res = arr.concat('karthik','sai','krishna');
console.log(res);
console.log(typeof res);
console.log(JSON.stringify(res));