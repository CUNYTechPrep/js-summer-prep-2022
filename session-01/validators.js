let letter = /[A-za-z]/;
let number = /[0-9]/;
var specialCharacters = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  if(username.lenght < 3  || username.lenght >10){
    return false;
  }

  if(username.lenght === 1 && username.match(letter) ){
    return true; 
  }

  if((username === letter) && (username === number)){
    return true;
  }

  if(username != specialCharacters){
    return true;
  }

  else{
    return false;
  }

  return;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  if(password.lenght < 10 || password.lenght > 64){
    return false;
  }
  if((password === letter) && (password === number) && (password === specialCharacters)){
    return true
  }
  else{
    return false;
  }

  return;
}

module.exports = { validUsername, validPassword };
