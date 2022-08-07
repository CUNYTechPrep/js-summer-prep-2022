/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  let specialCharacters = "@@#$%^!!@#$%^&!.@,@";
  let valid = false;
  let countLetters = 0;
  let countNumbers = 0;
  let startNum = "0123456789";
  let startsWithNum = false;

  
  if(username.length >= 3 && username.length <=10){
    for(let i =0; i< startNum.length; i++){
      if(username.charAt(0) === startNum.charAt(i)){
        startsWithNum = true;
      }
    }

    if(startsWithNum === false){
      for(let i =0; i<username.length; i++){
        if(typeof username.charAt(i) === "number"){
          countNumbers++;
        }
        else if(typeof username.charAt(i) === "string"){
          countLetters++
        }
      }
      if(countLetters >0 || countNumbers >0){
        for(let i =0; i<username.length; i++){
            for(let p= 0; p<specialCharacters.length; p++){
              if(username.charAt(i) === specialCharacters.charAt(p)){
                valid = false;
                return valid;
              }else{
                valid = true;
              }
            }
        }
      }
    }
  }
  return valid;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  let flag = false;

  let countLetters = 0;
  let countNumbers = 0;
  let letters = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
  let nums = "0123456789";
  let specialCharacters = "@#$%^!!@#$%^&!";

  

  if(password.length >= 10 && password.length <= 64){
    for(let i = 0; i< password.length; i++){
      for(let x = 0; x<letters.length; x++){
        if(password.charAt(i) === letters.charAt(x)){
          countLetters++;
        }
      }
      for(let y =0; y<nums.length; y++){
        if(password.charAt(i) === nums.charAt(y)){
          countNumbers++;
        }
      }
    }
    if(countLetters > 0 && countNumbers > 0 ){
      for(let i = 0; i< password.length; i++){
        for(let p= 0; p<specialCharacters.length; p++){
          if(password.charAt(i) === specialCharacters.charAt(p)){
            flag = true;

          }
        }
      }
    }
  }
  return flag;
}

console.log(validUsername("@shark"));

module.exports = { validUsername, validPassword };
