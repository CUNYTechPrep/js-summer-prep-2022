/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  if (username.length < 3
    || username.length > 10) { return false; }

  let k = parseInt(username[0]);
  if (!isNaN(k)) { return false; }

  //special character testing doesn't work.
  let r = /[~`!@.#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/;
  if (r.test(username)) { return false; }
  return true;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  //let rs = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~`!@.#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/;
  let regLetters = /ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz/;
  let regSpec = /[~`!@.#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/;
  let regNum = /1234567890/;
  if (password.length < 10 || password.length > 64) { return false; }
  if (!regLetters.test(password)
      && !regSpec.test(password)
      && !regNum.test(password)) {
        console.log(password + " " + " returned false");
    return false;
  }

  return true;
}

module.exports = { validUsername, validPassword };
