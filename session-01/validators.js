/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
    const numbers = /[0-9]/gi;
    const specialChars = /[^\w]/gi;
    const alphanumeric = /^[A-Za-z0-9]+$/gi;

    if(username.length > 10 || username.length < 3) {
      return false;
    } else if(numbers.test(username.charAt(0))) {
      return false;
    } else if(specialChars.test(username)) {
      return false;
    } else{
      return alphanumeric.test(username);
    }
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  if(password.length < 10 || password.length > 64){
    return false;
  }

  if(!password.match(/^(?=.*[a-zA-Z]) (?=.*\d) (?=.*[!@#$%^&*()_+])/)){
    return false;
  }
  return true;
}

module.exports = { validUsername, validPassword };