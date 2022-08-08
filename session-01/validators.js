/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/

function firstLetter(username){
  let c = username.charAt(0);
  if(c.toUpperCase() != c.toLowerCase() ){
    return true;
  }
}

function specialCharacters(username){
  let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if(spChars.test(username)) {
    return false;
  }
}

function validUsername(username) {
  if(username.length < 3 || username.length > 10) {
    return false;
}
if(firstLetter(username)){
  return false;
}
if (!username.match(/^[A-Z0-9]*$/i)) return false;

if (username.match(/[^A-Z0-9]/i)) return false;

return true;
}
/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  return;
}

module.exports = { validUsername, validPassword };
