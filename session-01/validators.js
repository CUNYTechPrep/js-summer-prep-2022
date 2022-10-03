/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    // checking for the length
    if(username.length < 3 || username.length > 10) return false;
    return (username.charAt(0).toLowerCase() != username.charAt(0).toUpperCase() && specialChars.test(username) === false);
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let hasNumber = false;
  let hasLetter = false;
  let hasSpecialCharacter = false;

  // right length
    if(password.length < 10 || password.length > 64) return false;
    
    for (let i = 0; i < password.length; i++){
      // has a number 
      if(!isNaN(password.charAt(i))){
        if(hasNumber === false){
          hasNumber = true;
        } 
      }
      // has a letter
      if(password.charAt(i).toLowerCase() != password.charAt(i).toUpperCase()){
        if(hasLetter === false){
        hasLetter = true;
        }
      }
    }
    // has a special character
    if(specialChars.test(password)) hasSpecialCharacter = true;
    
    // checking all the conditions
    return hasNumber && hasSpecialCharacter && hasLetter;
}

module.exports = { validUsername, validPassword };