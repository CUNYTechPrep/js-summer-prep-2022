/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  let upperStrings = [];
  for(let i = 0; i < listOfStrings.length; i++){
    upperStrings[i] = listOfStings[i].toUpperCase();
  }
  return upperStrings;
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
  for(let j = 0; j < listOfStudentObjects.length; j++){
    if(listOfStudentObjects[j].age() === false){
      sum +=0; //adds zerp if string is empty
    }
    sum += listOfStudentObjects[j].age();
  }
  return sum;
}

module.exports = { transformArrayToUpper, sumOfAllAges };
