/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  if(username.length >= 3 ){
    return true;
  } else if(username.length <= 10){
    return true;
  } else if(username.match(/^A-Za-z/)){
    return true;
  } else if(username.match(/A-Za-z0-9/)){
    return true;
  } else if(!username.match(/!@#$%^&*/)){
    return true;
  } else{
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
  if(password.length >= 10){
    return true;
  }  else if(password.length <= 64){
    return true;
  } else if(password.match(/(?=.*[a-zA-Z0-9])/) && password.match(/(?=.*[!@#$%^&*])/)){
    return true;
  } else {
    return false;
  }
  
}

module.exports = { validUsername, validPassword };
