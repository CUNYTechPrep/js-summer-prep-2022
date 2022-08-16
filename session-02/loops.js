// looping through arrays

const fruits = ["apple", "banana", "coconut", "durian"];

// While loop
// let i = 0;
// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// 🚫 avoid for-in loops
// for (const item in fruits) {
//   console.log(item);
// }

function fruitPrint(fruit) {
  console.log("Delicious: ", fruit);
}

// fruits.forEach(fruitPrint);
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

// callbacks

// .map
const pluralFruits = fruits.map(function (value) {
  return value + "s";
});
console.log(pluralFruits);
console.log(fruits);

// .filter
