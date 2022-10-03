/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  const newText = listOfStrings.map(str => str.toUpperCase());
  return newText
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
  let sum = 0;
  let ageCount = 0;
  let i = 0;
  while (i < listOfStudentObjects.length)
  {
    if (listOfStudentObjects[i].age == 'age') {
      sum += listOfStudentObjects[i].age;
      i++;
    }
  }
  if (ageCount == 0) {
    return 0; 
  }
  let avg = sum / ageCount;
  return avg;
}

module.exports = { transformArrayToUpper, sumOfAllAges };
