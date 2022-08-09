const student243 = {
  firstName: "Edwin",
  lastName: "Cruz",
  age: 29,
  gpa: 4.0,
  fullName() {
    return this.firstName + " " + this.lastName;
  },
  bday() {
    console.log("Happy Birthday!");
    this.age++;
  },
};

console.log(student243);
console.log(student243.fullName());

// student243.bday();
// console.log(student243);

// reassignment

// referencing properties

// adding properties

// removing properties

// does the property exist

// get property names

const fruits = ["apple", "pear", "cherry", "plum"];
const things = ["a", 42, { name: "Juan" }];

// length

// indexing out of bounds

// properties
