/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {

  if (username.length > 10 || username.length < 3) { 
    return false;
  }

  const regex1 = /^[a-zA-Z]/;
  if (!regex1.test(username)) {
    return false;
  }

  const regex2 = /\W/;
  if (regex2.test(username)) {
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
function validPassword(password) {

  if (password.length < 10 || password.length > 64) {
    return false;
  }

  const regex3 = /\d/;
  if(!regex3.test(password)) {
    return false;
  }

  const regex4 = /[A-Za-z]/;
  if (!regex4.test(password)) {
    return false;
  }

  const regex5 = /\W/;
  if (!regex5.test(password)) {
    return false;
  }

  return true;
}

module.exports = { validUsername, validPassword };