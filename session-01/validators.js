/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  let firstLetter = username[0];
  let iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
  if(username>3 && username<10){
    if(firstLetter.match(/[a-z]/i) && username.value.match(/^[0-9a-zA-Z]+$/) )
    {   return true
    }
    let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(spChars.test(username)){
      return false;
 
  }
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
  if(username>10 && username<64){
  return true;
}
return false;
}
module.exports = { validUsername, validPassword };

