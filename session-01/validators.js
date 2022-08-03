/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

function isAlpha(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function isNumber(str){
  return !isNaN(str);
}

function validUsername(username) {
  let size = username.length;
  if(containsSpecialChars(username)){
    return false;
  };
  if(size >= 3 && size <= 10){
    if(isAlpha(username[0])){
      let counter = 0;
      for(let i = 0; i < size; i++){
        if(isNumber(username[i]) || isAlpha(username[i])){
          counter++;
        };
      };
      if(counter = size){
        return true;
      }
    };
  };
  return false;
};

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  let letterCounter = 0;
  let numberCounter = 0;
  let spCharCounter = 0;
  let size = password.length;
  if(size >= 10 && size <= 64){
    for(let i = 0; i < size; i++){
      if(isNumber(password[i])){
        numberCounter ++;
      };
      if(isAlpha(password[i])){
        letterCounter ++;
      };
      if(containsSpecialChars(password[i])){
        spCharCounter ++;
      };
    };
    if(numberCounter >=1 && letterCounter >=1 && spCharCounter>=1){
      return true;
    }
  };
  return false;
};

module.exports = { validUsername, validPassword };
