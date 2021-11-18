function isValidPassword(password, username) {
   if(password.length >= 8 && password.indexOf(' ') === -1 && password.indexOf(username) === -1) {
      return true;
   }
   return false;
}

function isValidPassword1(password, username) {
   if((password.length < 8) || (password.indexOf(' ') !== -1) || (password.indexOf(username) !== -1)) {
      return false;
   }
   return true;
}

function isValidPassword2(password, username) {
   const tooShort = password.length < 8;
   const hasSpaces = password.indexOf(' ') !== -1;
   const tooSimilar = password.indexOf(username) !== -1;
   return !tooShort && !hasSpaces && !tooSimilar;
}

console.log(isValidPassword('89Fjjlnms', 'dogLuver'));
console.log(isValidPassword('dogLuver123!', 'dogLuver'));