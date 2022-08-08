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
  - password must contain at least 1 letter (?=.*[a-zA-Z]), 1 number (?=.*[0-9]), and 1 special character (?=.*[!@#$%^&*])
*/
function validPassword(password) {
  let spec_char = /[!@#$%^&*()+\-=\[\]{};':",.<>/]/;
  //password must be between (and including) 10-64 characters in length
  if(password.length < 10 || password.length > 64) return false;
  if(password.match(/[a-zA-Z]/)) return false;
  if(password.match(/[0-9]/)) return false;
  if(password.match(spec_char)) return false;
  
  let checked = 0;
  for (let i=0; i < password.length; i++){
      if(!((/[a-zA-Z]/).test(password[i])) || !((/[0-9]/).test(password[i])) || !(spec_char.test(password[i]))){
        checked++;
      }
  }
  if(checked === password.length){return false;}
  else{return true;}
  
  
}

module.exports = { validUsername, validPassword };
