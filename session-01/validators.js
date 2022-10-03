// Chynna Starr
// 08/09/2022
// Summer Prep Exercises

/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  if (username.length < 3 || username.length > 10) {
    return false;
  } else if (username.charCodeAt(0) < 65 || (username.charCodeAt(0) > 90 && username.charCodeAt(0) < 97) || username.charCodeAt(0) > 122) {
    return false;
  }
  for (let i = 0; i < username.length; i++) {
    if (isNaN(username[i]) && username.charCodeAt(i) < 65 || (username.charCodeAt(i) > 90 && username.charCodeAt(i) < 97) || username.charCodeAt(i) > 122) {
      return false;
    }
  }
  return true;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  if (password.length < 10 || password.length > 64) {
    return false;
  }
  let foundLetter = false;
  let foundNumber = false;
  let foundSpecialChar = false;
  for (let i = 0; i < password.length; i++) {
    if ((password.charCodeAt(i) >= 65 && password.charCodeAt <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)) {
      foundLetter = true;
    } else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
      foundNumber = true;
    } else {
      foundSpecialChar = true;
    }
  }
  return (foundLetter && foundNumber && foundSpecialChar ? true : false);
}

module.exports = { validUsername, validPassword };
