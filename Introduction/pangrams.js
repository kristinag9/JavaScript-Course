function isPangram(sentence) {
   let lowerCased = sentence.toLowerCase();
   for(let char of lowerCased) {
      if(lowerCased.indexOf(char) === -1) {
         return false;
      }
   }
   return true;
}

function isPangram1(sentence) {
   let lowerCased = sentence.toLowerCase();
   for(let char of lowerCased) {
      if(!lowerCased.includes(char)) {
         return false;
      }
   }
   return true;
}

console.log(isPangram('the five boxing wizards jump quickly'));
console.log(isPangram('the five boxing wizards jump quick'));