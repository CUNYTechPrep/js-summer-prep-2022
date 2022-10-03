/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {

  

  const strFormat = /[a-z]/i;
  
    if(username.length >= 3 && username.length <= 10){
    }
      for(let i = 0; i < username.length; i++){
        if(strFormat.test(username.charAt(0)) !== 'char'){
            return false;
        }
          if(typeOf (username) !== 'string'){
            return false;
          }
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
  if(password.length <= 10 && password.length >= 64){
    return false;
  }
    if(password.contains)
      return;
}

module.exports = { validUsername, validPassword };
