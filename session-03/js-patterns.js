// Short-circuiting of logical operators
// These return the actual values of the expressions on either side of the operator
//    ||, returns left if true, otherwise right
//    &&, if left true then returns right, otherwise returns left


// || for default values
function welcomeMessage(userInputName) {
  // if (!userInputName) {
  //   userInputName = "New User";
  // }
  const username = userInputName || "New User";
  console.log("Welcome", username);
}

welcomeMessage();
welcomeMessage("Julio");

// && guard
let driverAge = 15;
driverAge >= 16 && console.log("this person can drive");

// Ternary operator: ( ? : )
let result = luckyNumber === guess ? "right" : "wrong";
console.log("You guessed " + result);
