/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  //use for each or map
  //structure that transforms in place?
  return listOfStrings.map(string => string.toUpperCase())
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

  //use filter (get valid elements)
  //use map (get ages)
  //use reduce (get sum)
  return listOfStudentObjects.filter(item => 'age' in item).map(item=>item.age).reduce((sum,item)=>sum+item,0)
 
  
}

let arr = ["cat", "hat"]
console.log(transformArrayToUpper(arr))

module.exports = { transformArrayToUpper, sumOfAllAges };
