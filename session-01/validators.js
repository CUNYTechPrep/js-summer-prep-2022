/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  // Check requirements variables
  let checkLetter = /[A-Za-z]/;
  let checkNumber = /\d/;
  let checkSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (username.length >= 3 && username.length <= 10) {
    if (checkSpecial.test(username)) return false;
    if (checkNumber.test(username.charAt(0))) return false;

    return true;
  }

  return false;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  // Check requirements variables
  let checkLetter = /[A-Za-z]/;
  let checkNumber = /\d/;
  let checkSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  let containsLetter = false;
  let containsNumber = false;
  let containsSpecial = false;

  if (password.length >= 10 && password.length <= 64) {
    if (checkLetter.test(password)) containsLetter = true;
    if (checkNumber.test(password)) containsNumber = true;
    if (checkSpecial.test(password)) containsSpecial = true;
  }

  return containsLetter && containsNumber && containsSpecial;
}

module.exports = { validUsername, validPassword };
