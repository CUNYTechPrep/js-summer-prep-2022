/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  const upper = listOfStrings.map(element => {
    return element.toUpperCase();
  });
  return upper;
}

/*
  Write a function that returns the sum of all student ages.
  The function will be passed an array of objects and the result
  will be the sum of all ages.
  - Note, not all objects will contain an age. Omit these objects.
  For example, for the input:
    [{ name: 'Sandra', age: 31 }, {}, { name: 'Didi', age: 20}]
    the function should return 51
*/
function sumOfAllAges(listOfStudentObjects) {
  let sumOfAges = 0;
  for (const student of listOfStudentObjects){
    console.log(student.age);
    sumOfAges += parseInt(student.age);
  }
  return sumOfAges;
}

// testing
// const person = [
//   { age: '12'},
//   { age: '10'},
//   { age: '15'}
// ];

module.exports = { transformArrayToUpper, sumOfAllAges };
