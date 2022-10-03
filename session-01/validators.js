/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
	var regexLetter = /[a-zA-Z]/g;
	var regexSpecial = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
	if (username.length >= 3 && username.length <= 10) {
		if (regexLetter.test(username[0]) === true) {
			if (regexSpecial.test(username) === false) {
				return true;
			}
		}
	}
	return false;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
	var regexLetter = /[a-zA-Z]/g;
	var regexNumber = /\d/g;
	var regexSpecial = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
	if (password.length >= 10 && password.length <= 64) {
		if (regexLetter.test(password) === true && regexNumber.test(password) === true && regexSpecial.test(password) === true) {
			return true;
		}
	}
	return false;
}

module.exports = { validUsername, validPassword };
