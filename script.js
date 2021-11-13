document.getElementById('generate').addEventListener('click', () => {

const uppercase = (`ABCDEFGHIJKLMNOPQRSTUVWXYZ`)
const lowercase = (`abcdefghijklmnopqrstuvwxyz`)
const numbers = (`1234567890`)
const symbols = (`~!@#$%^&*()`)

let passLength = prompt("Enter desired length of password. Must be a minimum of 8 and max of 128 characters.");

if (passLength < 8 || passLength > 128) {
  alert("Length must be 8 - 128 characters")
}
else if (passLength >= 8 || passLength <= 128) {
  confirmCapital = confirm("Would you like to use uppercase?");
  confirmLower = confirm("Would you like to use lowercase?");
  confirmNum = confirm("Would you like to use numbers?");
  confirmSym = confirm("Would you like to use symbols?");
}

if (confirmCapital == false && confirmLower == false && confirmNum == false && confirmSym == false) {
  alert("Must select something!")
}
else if (confirmCapital && confirmLower && confirmNum && confirmSym) {
  var userChoice = uppercase.concat(uppercase, lowercase, numbers, symbols)
}
else if (confirmCapital && confirmNum & confirmSym) {
  var userChoice = uppercase.concat(numbers, symbols)
}
else if (confirmCapital && confirmLower && confirmNum) {
  var userChoice = uppercase.concat(lowercase, numbers)
}
else if (confirmLower && confirmNum && confirmSym) {
  var userChoice = lowercase.concat(numbers, symbols)
}
else if (confirmCapital && confirmLower) {
  var userChoice = uppercase.concat(lowercase)
}
else if (confirmCapital && confirmSym) {
  var userChoice = uppercase.concat(symbols)
}
else if (confirmLower && confirmNum) {
  var userChoice = lowercase.concat(numbers)
}
else if (confirmLower && confirmSym) {
  var userChoice = lowercase.concat(symbols)
}
else if (confirmLower) {
  var userChoice = lowercase
}
else if (confirmNum && confirmSym) {
  var userChoice = numbers.concat(symbols)
}
else if (confirmSym && confirmCapital) {
  var userChoice = symbols.concat(uppercase)
}
else if (confirmCapital && confirmNum) {
  var userChoice = uppercase.concat(numbers)
}
else if (confirmNum) {
  var userChoice = numbers
}
else if (confirmSym) {
  var userChoice = symbols
}
else if (confirmCapital) {
  var userChoice = uppercase
}

let password = ""

for (var i = 0; i < passLength; i++) {
  password += userChoice[Math.floor(Math.random() * userChoice.length)];
}

  document.getElementById("password").innerHTML = password;

})