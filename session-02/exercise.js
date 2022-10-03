/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  newList=[]
  for( word of listOfStrings){
    newList.push(word.toUpperCase())}

  return newList;
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
  sumOfAge=0;
  for (let i=0; i<listOfStudentObjects.length;i++){
    if(listOfStudentObjects[i].age){
      sumOfAge= sumOfAge+listOfStudentObjects[i].age
    }
  }
  return sumOfAge;
}

module.exports = { transformArrayToUpper, sumOfAllAges };
