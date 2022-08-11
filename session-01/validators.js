/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  const isUserNameLengthValid = username.length >= 3 && username.length <= 10;
  const isUserFirstCharValid = isNaN(username[0]);
  const hasSpecialChar = /\W/;

  return (
    isUserNameLengthValid &&
    isUserFirstCharValid &&
    !hasSpecialChar.test(username)
  );
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  const isPasswordLengthValid = password.length >= 10 && password.length <= 64;
  const hasChar = /[A-Za-z]/;
  const hasNum = /\d/;
  const hasSpecialChar = /\W/;

  if (!isPasswordLengthValid) {
    return false;
  } else {
    return (
      hasChar.test(password) &&
      hasNum.test(password) &&
      hasSpecialChar.test(password)
    );
  }
}

module.exports = { validUsername, validPassword };
