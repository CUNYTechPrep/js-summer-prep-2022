/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  const isFirstLetterAlpha = str => /^[a-zA-Z]*$/.test(str[0]);
  const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const hasSpecialCharacters = specialCharacters.test(username);

  if ((username.length >= 3 && username.length <= 10) && (isFirstLetterAlpha(username)) && (!(hasSpecialCharacters))){
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
  const hasAlpha = /[a-zA-Z]/.test(password);;
  const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const hasSpecialCharacters = specialCharacters.test(password);
  const hasFirstCharNum = /\d/.test(password);
  if((password.length >= 10 && password.length <= 64) && (hasAlpha) && (hasSpecialCharacters) && (hasFirstCharNum)){
    return true;
  }
  return false;
}

module.exports = { validUsername, validPassword };
