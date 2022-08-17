/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
    if(username.length < 3 || username.length > 10) {
      return false;
    }
    let lowercase = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for(let i = 0; i < lowercase.length; i++){
        if(username[0] !== lowercase[i])return false;
    }
    let uppercase = ["A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for(let j = 0; j < uppercase.length; j++){
        if(username[0] !== uppercase[j])return false;
    }
    let s = 0;
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for(let k = 0; k < username.length; k++){
      if(username[k] !== lowercase[s] || username[k] !== uppercase[s]|| username[k] !== numbers[s]){
        s++;
      }
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
  if(password.length < 10 || password.length > 64){
    return false;
  }
  let lowercase = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let uppercase = ["A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let specialCharacters = ["~","`","!", "@","#","$","%","^","&", "*","("," )","_","-","+","=","{","[","}","]","|",':' , ';' , "'" , '<' , '>' , '.' , '?' , '/'];
  
  let letterCount = 0;
  let specialCharCount = 0;
  let numCount = 0;
  for(let a = 0; a < password.length; a++){
    let b = 0;
    if(password[a] === lowercase[b] || password[a] === uppercase[b]){
      letterCount++;
    }
    b++;
  } 
  for(let c = 0; c < password.length; c++){
    let d = 0;
    if(password[c] === numbers[d]){
      numCount++;
    }
    d++;
  }
  for(let e = 0; e < password.length; e++){
    let f = 0;
    if(password[e] === numbers[f]){
      specialCharCount++;
    }
    f++;
  } 
  if(letterCount === 0 || numCount=== 0 || specialCharCount === 0){
    return false;
  }
  return true;
}

module.exports = { validUsername, validPassword };
