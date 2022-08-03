/***** Printing output *****/
console.log("Hello CUNY Tech Prep");

/***** Comments *****/
// this is a single line comment

/*
this
is a multi line
comment
*/

/***** Semicolons (optional) *****/
// console.log("Hi")

/***** Variables *****/
// declaring variables
let age = 30;
console.log(age);

// mutable (it can change)
age += 2;
console.log(age);

// dynamically typed
age = "old";
console.log(age);

// constants (immutable)
const lastName = "Lopez";
console.log(lastName);

// 🚫 Can't update a constant variable
// lastName = 'John';
// console.log(lastName);

// We can use unicode characters (careful when copying/pasting code)
age = "😢";
console.log(age);

// convention: use camelCase for our variable names and function names
let firstName = "Edgar";
let dateOfBirth = "1-1-1000";
// let first_name = "John"; // snake case

// Older ES5 syntax (avoid)
luckyNumber = 12;
var luckyNumber = 7;
console.log(luckyNumber);

secondLuckyNumber = 7;
console.log(secondLuckyNumber);

/***** Data Types *****/
// Booleans
console.log(true);
console.log(false);

// Numbers (aka integers and floats)
console.log(11 + 31);
console.log(45.999);

// Strings
console.log("I <3 CTP");
console.log("Learning" + " - " + "JavaScript");

// null
console.log(null);

// undefined
let lonely;
console.log(lonely);

// mixing up data types (coercion)
console.log(3 + "4");
console.log(3 - "4");
console.log(3 + parseInt("4")); // parseInt converts to number

/***** Objects *****/
// Objects
let array = ["array", "with", 4, "things", [2, 3]];
console.log(array);
console.log(array.length);
array.push(3.14);
console.log(array.length);

// strings
let anotherName = "Sofia";
console.log(anotherName.length);

// Dictionary, map, key-value store
let obj = {
  "first-name": "Sofia",
  age: 31,
};

// getting properties
console.log(obj.name, obj.age, obj["first-name"], obj["age"]);

// setting new properties
obj.school = "QC";
console.log(obj);

/***** Functions *****/
function add2(num) {
  return num + 2;
}

let result = add2(5);
console.log(result);

/***** Conditionals *****/
// equality:
// 🚫 avoid loose equality (==) [applies coercion]
// ✅ use strict equality (===)
console.log(34 == 34);
console.log(34 == "34");

console.log(34 === 34);
console.log(34 === "34");
console.log("ed" === "ED");

// Not equals
console.log(34 !== 45);

// Logical operators: !, ||, &&
// Comparison operators: <, >, <=, >=, ===, !==

// Can do if-else-if and nesting as you expect
// if (conditional) {
//   if (conditional) {
//   } else {
//   }
// } else if (conditional) {
// } else {
// }

/***** Looping *****/
// For loops
let schoolName = "Baruch";
for (let i = 0; i < schoolName.length; i++) {
  console.log(schoolName[i]);
}

// while loop
let j = 0;
while (j < schoolName.length) {
  console.log(schoolName[j]);
  j++;
}
