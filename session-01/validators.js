/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  //check length using built in string len 
  username = username.toLowerCase()
  const lowerLength = 3
  const upperLength = 10

  //helper functions
  function checkLetter(letter) {
    return (letter > 96 && letter < 123) ? true : false

  }

  function checkNumber(number) {
    return (number > 47 && number < 58) ? true : false
  }
  //check length
  if (username.length < lowerLength || username.length > upperLength) {
    return false
  }

  //check letter 
  if (!checkLetter(username.charCodeAt(0))) {
    return false
  }

  //check if characters are alphanumeric
  for (let i = 1; i < username.length; i++) {
    chr = username.charCodeAt(i)
    if (!checkLetter(chr) && !checkNumber(chr)) {
      return false
    }

  }

  return true




}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPasswordRegex(password) {
  password = password.toLowerCase() //convert to lower case before processing
  const specialChars = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/) //regular expression for special characters
  const alphaChars = new RegExp(/[a-z]/) //regular expression for letters
  const NumChars = new RegExp(/[0-9]/)  //regular expression for numbers

  //arrow function testing for alpha-numeric characters usign regular expression and "test function"
  //test-> returns true if string contains characters in regular expression and false otherwise
  let testRegExp = (regExpression, string) => regExpression.test(string)
  //return true if string has least 1 letter, 1 number, and 1 special character
  return (testRegExp(specialChars, password) && testRegExp(alphaChars, password) && testRegExp(NumChars, password)) ? true : false


}

function validPassword(password) {
  password = password.toLowerCase() //convert to lowercase before processing

  //function to check for special characters
  let hasSpecialChar = function (string) {
    for (let i = 0; i < string.length; i++) {
      if (!(string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) && !(string.charCodeAt(i) > 47 && string.charCodeAt(i) < 58)) {
        return true //return true on first non-alphanumeric character
      }
    }

    return false  
  }




  let hasLetter = function (string) {
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
        return true   //return true on first letter
      }
    }

    return false

  }

  let hasNumber = function (string) {
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) > 47 && string.charCodeAt(i) < 58) {
        return true //return true on first number
      }
    }
    return false
  }


  return hasLetter(password) && hasNumber(password) && hasSpecialChar(password) //return true if contains 1 letter, 1 number, 1 special character
}



module.exports = { validUsername, validPassword };



