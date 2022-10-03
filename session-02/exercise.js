/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/


/*
    @Adam
    I created a simple for loop that saves each value we pass through the array with the
    uppercase version of the array.
 */
function transformArrayToUpper(listOfStrings) {

   for (let i = 0; i < listOfStrings.length; i++) {
     listOfStrings[i] = listOfStrings[i].toUpperCase();
   }

  return listOfStrings;
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


/*
    Using the ternary operator, we can simplify this function's math by looping through
    the array and adding values to a sum with the sum. We utilize the "Has own" operator to justify whether a person's age is added.
 */
function sumOfAllAges(listOfStudentObjects) {

  let sum = 0;

  for (let i = 0; i < listOfStudentObjects.length; i++) {
   sum = Object.hasOwn(listOfStudentObjects[i],"age") ? sum += listOfStudentObjects[i].age : sum += 0;
  }

  return sum;
}

module.exports = { transformArrayToUpper, sumOfAllAges };
