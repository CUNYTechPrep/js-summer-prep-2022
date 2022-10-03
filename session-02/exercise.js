/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {

  for(let i = 0; i < listOfStrings.length;i++){
    let str = listOfStrings[i];
    listOfStrings = str.toUpperCase();
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

  let sum = listOfStudentObjects.filter(item => item.age).reduce((prev, curr) => prev + curr,0);
    return sum;

  //if(!listOfStudentObjects.age){
    //return listOfStudentObjects[age];
    
 /* for(let i = 0; i < listOfStudentObjects.length;i++){
    if(listOfStudentObjects.hasOwnProperty('age')){
      return listOfStrings 
      }
        else{
          return 0;  
    }
  }
  */

    
}

module.exports = { transformArrayToUpper, sumOfAllAges };
