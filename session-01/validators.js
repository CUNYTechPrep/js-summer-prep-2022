/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/

    //check if string has a number
    function hasNumber(str) {
    return /\d/.test(str);
    }

  // function to check if char is a letter
   function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}

  //to check for special characters
    function containsSpecialChars(str) {
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      return specialChars.test(str);
    }

function validUsername(username) {

    let firstLetter = isCharacterALetter(username[0])
    let checkSpecialChar = containsSpecialChars(username)
    
    if (username.length >= 3 && username.length <= 10 && firstLetter && checkSpecialChar == false){
    return (true);
    }
    else {
    return (false);
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
    
   let checkNumber = hasNumber(password);
   let checkLetter = isCharacterALetter(password);
   let checkSpecial = containsSpecialChars(password);
    
   if (password.length >= 10 && password.length <= 64 && checkNumber && checkLetter && checkSpecial){
    return (true);
    }
    else {
    return (false);  
}
}

module.exports = { validUsername, validPassword };


let username = validUsername("hjfhjgf");

console.log(username);

let password = validPassword("668678658d#76578657865765");

console.log(password);
