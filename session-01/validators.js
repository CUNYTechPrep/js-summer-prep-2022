/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  if( (username.length < 3 || username.length > 10) ){
    return false;
  }
  
  if (!(username[0] >= "a" && username[0] <= "z") &&!(username[0] >= "A" && username[0] <= "Z")){
    return false;
  }

  for (let i = 0; i < username.length; i++) {
    if (username[i] >= "a" && username[i]  <= "z") continue;
    if (username[i]  >= "A" && username[i]  <= "Z") continue;
    if (username[i] >= "0" && username[i]  <= "9") continue;
    return false;
  }
  return true;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  if((password.length < 10 || password.length > 64) ){
    return false;
  }
  var containsnum = false;
  var containsletter= false;
  var containsspecial = false;

  for(let i = 0; i < password.length && !containsnum; i++){
    if (password[i]>= "0" && password[i] <= "9") containsnum = true;
  }

  if(!containsnum){
    return false;
  }

  for(let i = 0; i < password.length && !containsletter; i++){
    if ((password[i]>= "a" && password[i] <= "z") || (password[i] >= "A" && password[i] <= "Z"))
      containsletter = true;
  }
  if(!containsletter){
    return false;
  }
  const specialPrintableCharacters = " !\"#$%&'()*+,-./:;<=>?@{\\]^_`{|}~";

  for (let i = 0; i < password.length && !containsspecial; i++) {
    if (specialPrintableCharacters.includes(password[i])) containsspecial=true;
  }
  if(!containsspecial){
    return false;
  }

  return true;
}

module.exports = { validUsername, validPassword };
