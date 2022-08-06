/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function isLetter(str) {
  return str.length == 1 && str.match(/[a-z]/i);
}

function containsSpecialChars (str) {
  const specChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specChars.test(str);
}

function isNumber(val) {
  return !isNaN(val);
}

function validUsername(username) {
  if(username.length >= 3 && username.length <= 10) {    

    if(isLetter(username[0])){

      if(!containsSpecialChars(username)) {
        return true;
      }
    }
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

  let hasLetter = false;
  let hasNum = false;
  let hasSpecChar = false;

  if(password.length >= 10 && password.length <= 64) {    

    for(let i = 0; i < password.length; i++) {

      if(isLetter(password[i])){   
        
        hasLetter = true;

      }

      if(isNumber(password[i])){

        hasNum = true;

      }

      if(containsSpecialChars(password[i])) {

        hasSpecChar = true;

      }

    }

    if(hasLetter == true && hasNum == true && hasSpecChar == true) {
      return true;
    }
   
  }

  return false;
}

module.exports = { validUsername, validPassword };
