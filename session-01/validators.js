/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  if (username.length < 3 && username.length > 10)
   {
    return false;
  }
  else if (username.length >=3 && username.length <= 10) {
    return true;
  }
  if (username.length === 1 && username.match(/[a-z]/i)){
    return true;
  }
  else if(!(username.length === 1 && username.match(/[a-z]/i))){
    return false;
  }
  const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if(specialChar.test(username)){
    return false;
  }
  let b = /^[a-zA-Z].+$/;
  if (b.test(password)){
    return true;
  }
}
/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
if (password.length >= 10 && password.length <= 64){
  return true;
}
else if (password.length < 10 && password.length > 64) {
  return false;
}
let re = /^[a-zA-Z0-9_-]+$/;
if (!re.test(password)){
  return false;
  }
const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
if (!specialChar.test(password)){
  return false;
}
}

module.exports = { validUsername, validPassword };
