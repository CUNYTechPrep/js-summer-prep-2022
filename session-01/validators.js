/*
  Joanne Pyo
  Run progrm : npm run test
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) { 
  // Check if username is not between (and including) 3-10 characters in length, then return false.
  if(username.length < 3 || username.length > 10){
    return false 
  } 
  // Check if username is not begin with a letter, then return false.
  // from https://stackoverflow.com/questions/57767025/how-to-check-if-a-string-contains-both-letters-and-numbers
  if(!username[0].match(/[a-zA-Z]/)){
    return false;
  }

  // Check if username is not contain number and letters, then return false
  if(!username.match(/^[a-zA-Z0-9]+$/)){
    return false;
  }

  // Check if username cotains special characters, then return false
  // from https://javahungry.blogspot.com/2020/06/check-string-contains-special-characters.html
  if(username.match(/[!@#$%&*()'+,-./:;<=>?[]^_`{|}/))
  return false;

  // Otherwise return true.
  return true;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  // if password is not between 10-64 characters then return false.
  if(password.length < 10 || password.length > 64){
    return false;
  }

  // if passowrd is not conatin at least 1 letter, 1 number, and 1 special character, then return false.
  // from https://stackoverflow.com/questions/27938415/regex-for-password-atleast-1-letter-1-number-1-special-character-and-should
  if(!password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])/)){
    return false;
  }

  // Otherwise return true.
  return true;
}

module.exports = { validUsername, validPassword };
