/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/

function isLetter(username) {
  let result = username.toLowerCase();
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  for (let i = 0; i < alpha.length; i++) {
    if (result == alpha[i])
      return true;
  }
}
//username may contain numbers and letters
function numLetterOnly(username) {
  let result = username.toLowerCase();
  let alpha = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  for (let i = 0; i < username.length; i++) {
    isLetterOrNumber = false
    for (let j = 0; j < alpha.length; j++) {

      if (result[i] == alpha[j])
        isLetterOrNumber = true
    }
    if (isLetterOrNumber == false) {
      return false;
    }
  }
  return true;
}

function validUsername(username) {
  //username must be between (and including) 3-10 characters in length
  if (!(username.length >= 3 && username.length <= 10)) {
    return false;
  }
  //username must begin with a letter
  if (!isLetter(username[0])) {
    return false;
  }

  if (numLetterOnly(username)) {
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
  if (!(password.length >= 10 && password.length <= 64)) {
    return false;
  }
  if (!(hasAtLeastOneLetter(password))) {
    return false;
  }

  if (!(atLeastOnechar(password))) {
    return false;
  }

  if (!(atLeastOneNum(password))) {
    return false;
  }
  return true;
}
function hasAtLeastOneLetter(string) {
  for (let i = 0; i < string.length; i++) {
    if (isLetter(string[i])) {
      return true;
    }
  }
  return false;
}
function isChar(oneChar) {
  let number = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '?']
  for (let i = 0; i < number.length; i++) {
    if (oneChar == number[i]) {
      return true;
    }
  }
  return false;
}

function atLeastOnechar(string) {
  for (let i = 0; i < string.length; i++) {
    if (isChar(string[i])) {
      return true;
    }
  }
  return false;
}

function isNumber(oneChar) {
  let number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  for (let i = 0; i < number.length; i++) {
    if (oneChar == number[i]) {
      return true;
    }
  }
  return false;
}

function atLeastOneNum(string) {
  for (let i = 0; i < string.length; i++) {
    if (isNumber(string[i])) {
      return true;
    }
  }
  return false;
}

module.exports = { validUsername, validPassword };
