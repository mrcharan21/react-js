/*
What is Object in JavaScript?
// Object in JavaScript is a collection of key-value pairs, where each key is a string (or Symbol) and the value can be any data type, including other objects, functions, or primitive values.

// Example of Object in JavaScript
// An object in JavaScript is a collection of properties, where each property is defined as a key-value pair. Objects can be created using object literals, constructor functions, or the Object.create() method. They can also contain methods, which are functions associated with the object.
*/

var person = {
    name: 'charan',
    age:23,
    address:"Hyderabad",
    email:"charan@gmail.com"
};
console.log(person);

// In the above example,we have created an object named `person` with four properties: `name`, `age`, `address`, and `email`. Each property has a key (like `name`) and a value (like `'charan'`).

console.log(person.name);
console.log(person.age);


// you can also add ,modify or delete properties in an object after it has been created.

person.phone = "1234375634"; // Adding a new property
console.log(person.phone); 

person.age =25;     // Modifying an existing property
console.log(person.age);

// Deleting a property
delete person.address;
console.log(person.address); 

// stringify an parse

//Json.stringify() converts a JavaScript object into a JSON string,
//  while JSON.parse() converts a JSON string back into a JavaScript object. This is useful for data storage and transmission.


var car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    features: ['Air Conditioning', 'Navigation System', 'Bluetooth']
}
console.log(car);
// Convert the car object to a JSON string
var carJson = JSON.stringify(car);
console.log(carJson);

// Convert the JSON string back to a JavaScript object
var carObject = JSON.parse(carJson);
console.log(carObject);

// Accessing properties of an object
// You can access properties of an object using dot notation or bracket notation.
console.log(car.make); // Using dot notation
console.log(car['model']); // Using bracket notation