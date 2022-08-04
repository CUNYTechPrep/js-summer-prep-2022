/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/

/* @adam dev 8/4
    I decided to take a simplified approach with a switch statement,
    since if/else if could get unweildy and we are working with one input that needs to be checked through several conditions.
    Javascript contains a method for string that are inputted with regular expression, which simplifies our code for relation to speed. "
 */

function testString(str, type) {
    switch(type) {
      case "Letters":
        return /[a-zA-Z]/.test(str)
      case "Specials":
        return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str)
      case "Numbers":
        return /[0-9]/.test(str)
      default:
        return false;
    }
}

function validUsername(username) {

  if (username.length < 3 || username.length > 10) {
    return false;
  } else if (testString(username[0], "Letters") === false) {
    return false;
  } else if (testString(username, "Specials")) {
    return false;
  }

  return true;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/

/*
    I dec
 */

function validPassword(password) {

  console.log(password.length)

  if (password.length >= 10 && password.length <= 64) {
    return testString(password, "Letters") && testString(password, "Specials") && testString(password, "Numbers");
  }

  return false;

}

module.exports = { validUsername, validPassword };
