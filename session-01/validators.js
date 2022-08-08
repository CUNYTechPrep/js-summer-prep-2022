/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
   //username must be between (and including) 3-10 characters in length
   if(username.length < 3 || username.length > 10) return false;
  //username must begin with a letter
  if(!((/[a-zA-Z]/).test(username[0]))) return false;

  let spec_char = /[!@#$%^&*()+\-=\[\]{};':",.<>/]/;
  let checked = 0;
  for(let i=0; i < username.length; i++){
      //username may contain numbers and letter and username cannot contain special characters
      if((/[0-9A-Za-z]/).test(username[i]) && !(spec_char.test(username[i]))){
          checked++;
        }
        
      }

  if(checked === username.length) {return true;}
  else {return false;}
  
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  let regexLetter = /[A-Za-z]g/;
  let regexNum = /[0-9]g/;
  let specChar = /[!@#$%^&*()+\-=\[\]{};':",.<>/]g/
  
  if(password.length < 10 && password.length > 64) return false;

  
  if(password.length >= 10 && password.length <= 64 && regexLetter.test(password)===true && 
    regexNum.test(password)===true && specChar.test(password)===true){
      return true;
    }
  

  return false;
  
}

module.exports = { validUsername, validPassword };
