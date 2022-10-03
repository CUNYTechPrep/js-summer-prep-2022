/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
    if (
        username.length >= 3 && // Checks if username length is between 3-10 characters long
        username.length <= 10 && //
        username[0].match(/[a-zA-Z]/) && // Checks if username starts with a letter
        !username.match(/[^a-zA-Z0-9]/) // Checks if username contains characters that are not alphanumeric
    )
        return true;
    return false;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
    if (
        password.length >= 10 && // Checks if password length is between 10-64 characters long
        password.length <= 64 && //
        password.match(/([^A-Za-z1-9]+)/) && // Checks if password contains at least 1 special character,
        password.match(/[A-Za-z]+/) && // letter,
        password.match(/[0-9]+/) // and number
    )
        return true;
    return false;
}

module.exports = { validUsername, validPassword };
