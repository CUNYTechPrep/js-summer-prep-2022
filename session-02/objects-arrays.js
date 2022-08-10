const student243 = {
  firstName: "Edwin",
  lastName: "Cruz",
  age: 29,
  gpa: 4.0,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  bday() {
    console.log("Happy Birthday!");
    this.age++;
  },
};

console.log(student243);
console.log(student243.fullName());

student243.bday();
console.log(student243);

// reassignment (not allowed with constant variables)
// student243 = { firstName: "Sally", age: 42 };

// referencing properties
student243.age;
student243["firstName"];

// adding properties
student243.major = "Science";
student243["minor"] = "Math";

console.log(student243);

// removing properties
delete student243.major;
console.log(student243);

// does the property exist
if (student243.major) {
  console.log("Major:", student243.major);
} else {
  console.log("Major not found");
}

// get property names
console.log(Object.keys(student243));

// Arrays
const fruits = ["apple", "pear", "cherry", "plum"];
const things = ["a", 42, null, { name: "Juan" }];

// length
console.log(things.length);

// indexing out of bounds
things[0]; // "a"
console.log(things[10]); // undefined

// properties
console.log(Object.keys(things)); // don't do this
