/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  for (var i = 0; i < listOfStrings.length; i++){
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
function sumOfAllAges(listOfStudentObjects) {
  let sum = 0;
  for(var index = 0; index < listOfStudentObjects.length; index++){
    if (listOfStudentObjects[index].hasOwnProperty('age')){
      sum += listOfStudentObjects[index].age;
    } 
  }
  return sum;
  
}

module.exports = { transformArrayToUpper, sumOfAllAges };
