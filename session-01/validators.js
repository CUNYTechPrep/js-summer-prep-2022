/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length {3,10}
  - username must begin with a letter   [a-zA-Z]?
  - username may contain numbers and letters  ([a-zA-z][0-9])*
  - username cannot contain special characters [^\w]{0}
*/
function validUsername(username) {
  const regEx = /([a-zA-Z]{1})([a-zA-Z0-9]{2,9})([^\w]{0})/g;
  const numberReg = /[0-9]/g;
  const sepcialReg = /[^\w]/g
  if(username.length > 10) return false;
  if(numberReg.test(username.charAt(0))) return false;
  if(sepcialReg.test(username)) return false;

  return regEx.test(username);
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
if(password.length < 10 || password.length > 64) return false;
const letterRegEx = /[a-zA-Z]/g
const numberRegEx = /[0-9]/g
const specialRegEx = /[^\w]/g
  if(letterRegEx.test(password))
  {
    if(numberRegEx.test(password))
    {
      if(specialRegEx.test(password))
      {
        return true
      }else{
        return false
      }
    }else{
      return false
    }

  }else{
    return false
  }

}

module.exports = { validUsername, validPassword };
