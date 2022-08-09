/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
 
  (username.charAt(i) === "@" || username.charAt(i) === "." || username.charAt(i) === "!" ||)
 
*/
function validUsername(username) {
  let userChecker = true;
 
  if (username.length < 3 || username.length > 10) //good
  {
    userChecker = false;
  }
 
  let firstLetter = username.charAt(0);
 
  if (firstLetter < 0 || firstLetter >= 0 ) // if first letter is any number return false
  {
    userChecker=false;
  }
 
 /* for (let i  = 0; i < username.length; i++) // if not a number or letter return false // This didn't work looked up stuff online
  {
    if (username.charAt(i) != [0-9] || username.charAt(i) != [^a-zA-Z]  )
    {
      userChecker=false;      
    }
 
  }
*/
if (/^[A-Za-z0-9]+$/.test(username) === false) // test is a bool + thing i got online
{
  userChecker = false;
}
 
  return userChecker;
}
 
/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
  /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str); thing i saw online
 
*/
function validPassword(password) {
  let passCheck = true;
 
 
  if (password.length < 10 || password.length > 64)
  {
    passCheck = false;
  }
 
 
  if (/^[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?@]/g.test(password) === false) // if threre are no specail chrs return false
  {
    passCheck = false;
  }
 
 
  if (/^[A-Za-z]+$/.test(password) === false) //  if there is no letters return fallse
  {
    passCheck = false;
  }
 
 
  if (/^[0-9]+$/.test(password) === false) // if there are no numbers false
  {
    passCheck = false;
  }
 
  return passCheck;
}
 
module.exports = { validUsername, validPassword };
 
