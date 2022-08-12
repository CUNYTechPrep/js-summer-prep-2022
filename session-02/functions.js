// Named functions
function average(a, b, c) {
  return (a + b + c) / 3;
}

console.log(average(15, 20, 23));

// anonymous / unnamed functions
const add2 = function (a, b) {
  return a + b;
};

// Arrow functions (ES6)
const add3 = (a, b) => {
  return a + b;
};

// implicit return with single expression functions
// (no curly braces {}, and no return statement)
const add4 = (a, b) => a + b;

console.log(add4(3, 4));
console.log(add4);

// single parameter arrow function
// parentheses are optional
// const increaseBy3 = num => num + 3;
