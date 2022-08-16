/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) { // this works now
  return listOfStrings.map(element => {
    return element.toUpperCase();
  });
   
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
  let sumAge = 0;

  for (let i = 0; i < listOfStudentObjects.length; i++)
  {
    if (listOfStudentObjects[i].age === undefined )
    {
      sumAge+=0;
    }
    else   {sumAge += listOfStudentObjects[i].age;}
  }

  return sumAge;
}

module.exports = { transformArrayToUpper, sumOfAllAges };
