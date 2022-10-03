/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/

// let array=["cat", "hat"];
// console.log(transformArrayToUpper(array));
function transformArrayToUpper(listOfStrings) {

  for(let i = 0; i<listOfStrings.length; i++){
    
      listOfStrings[i]=listOfStrings[i].toUpperCase();
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

// array = [{ name: 'Sandra', age: 31 }, {}, { name: 'Didi', age: 20}];
// console.log(sumOfAllAges(array));
function sumOfAllAges(listOfStudentObjects) {

  let sum = 0;
  
  //For loop for iterating through the array
  for(let i = 0; i<listOfStudentObjects.length;i++){
    //console.log(listOfStudentObjects[i].age)

    //if for omitting missing ages
    if(!(listOfStudentObjects[i].age===undefined)){
     sum += listOfStudentObjects[i].age;
     //console.log(sum);
    }

   
  }

  return sum;
}

module.exports = { transformArrayToUpper, sumOfAllAges };
