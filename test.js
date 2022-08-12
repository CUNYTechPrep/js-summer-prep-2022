let arr=[{ gpa: 4.0 }, {}, { name: "Sally" }, /*{name: 'Sandra', age: 31 }, {name:'john', gpa: 4},{}, { name: 'Didi', age: 20}*/];
function sumOfAllAges(arr) {
    let sum=0;
    for(let i=0; i < arr.length; i++)
       {
          if(arr[i].age!==undefined)
          {
             sum +=arr[i].age;
          }
         
       }
    return sum;
  }
  console.log(sumOfAllAges(arr));