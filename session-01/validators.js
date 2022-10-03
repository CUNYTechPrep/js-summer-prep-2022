/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username){
    firstPattern=/[a-zA-Z]/;
    secondPattern="^[^<>{}\"/|;:.,~!?@#$%^=&*\\]\\\\()\\[¿§«»ω⊙¤°℃℉€¥£¢¡®©_+]*$";

    if ((username.slice(0,1).match(firstPattern))&& (username.length>=3 && username.length<=10)){
        if (username.match(secondPattern)){
            return true;
        }
        return false;
    }
    return false;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/

function validPassword(password){
  secondPattern=/./
  
  if ((password.length>=10 && password.length<=64)&&(password.match(secondPattern))){
    if (password.match(/[a-zA-Z]/) && (password.match(/[0-9]./)) ){
      return true;
    }
    return false;
    
  }
  return false; 
}

module.exports = { validUsername, validPassword };
