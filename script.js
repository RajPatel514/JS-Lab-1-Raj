// Declare and Use Variables

const studentName = "Raj Patel";
var studentAge = 32;
var isEnrolled = true;

console.log(studentName);
console.log(studentAge);
console.log(isEnrolled);
console.log(`My name is ${studentName} and I am ${studentAge} years old.`)

// Demonstrate Data Types

let string = "Humber";
console.log(string);

let gasPrice = 1.68;
console.log(gasPrice + ' cents/L');

let doorOpen = false;
let doorClose = true;
console.log(doorOpen);

let seasons = ["winter", "spring", "summer", "automn"];
console.log(seasons)

const vehicle = {
    make: "Mazda",
    model: "CX5",
    color: "White",
    type: "SUV",
    winterTires: true,
    odometer: 150000,
}
console.log(vehicle);
console.log(vehicle.color)

// Basic Operators

// Arithmetic Operators
let x = 100
let y = 20
let z = 100
console.log(x + y);
console.log(x - y);
console.log(x * z + y);
console.log(x / z);

// Comparison Operators
console.log(x > y);
console.log(x < y);
console.log(x === y);
console.log(x != y)

// Logical Operators

// console.log(vehicle.winterTires) - From object, output True.
console.log(!vehicle.winterTires);

let w = false;
let u = true;
console.log(w && u);
console.log(w || u);