/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  if(listOfStrings.length <1){
    return[];
  };
let newArr = [];
let newWord= "";

for(let i =0; i< listOfStrings.length; i++){
  newWord ="";
  for(let a = 0; a< listOfStrings[i].length; a++){
     newWord = newWord + listOfStrings[i].charAt(a).toUpperCase();
  }
  newArr.push(newWord);
}
  return newArr;
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
for(let i =0; i< listOfStudentObjects.length; i++){
  if(Object.keys(listOfStudentObjects[i]).length<1){
    continue;
  }
  else{
    if(listOfStudentObjects[i].age){
        sumAge = sumAge + listOfStudentObjects[i].age;
      }
  }
}
return sumAge;
}


module.exports = { transformArrayToUpper, sumOfAllAges };
