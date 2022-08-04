/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  var user= /^[A-Za-z]\w{2,9}$/;
  if(username.match(user)){
    return true;
  }
  
  else{
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
  var pass= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,64}$/;
  if(password.match(pass)){
    return true;
  }
  else{
    return false;
  }
}

module.exports = { validUsername, validPassword };
