/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (username.length >= 3 && username.length<= 10)
    return true;
  else if(username.length < 3)
    return false;
  else if(username.length > 10)
    return false;
  else if(!username.charAt(0).matches("^[a-zA-Z]*$"))
    return false;
  else if(specialChars.test(username)){
    return false;
  }
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if(password.length >= 10 && password.length <= 64) {
    return true;
  }
  if(/^[a-zA-Z]+$/.test(password)){
    return false;
  }
  if(/^[0-9]+$/.test(password)){
    return false;
  }
  if(specialChars.test(password)){
    return false;
  }

}

module.exports = { validUsername, validPassword };
