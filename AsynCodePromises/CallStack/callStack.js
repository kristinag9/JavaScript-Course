// The call stack helps the JS interpreter to keep track of its place in a script that calls multiple functions

const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
   return square(a) + square(b) === square(c);
};

isRightTriangle(3, 4, 5);

// 1. Add isRightTriangle(2, 4, 5) in the call stack
// 2. Add square(3) in the call stack
// 3. Add multiply(3) in the call stack. It returns a value - 9.
// 4. Removes multiply(3) from the call stack
// 5. Add square(4) in the call stack
// 6. Add multiply(4) in the call stack. It returns a value - 16.
// 7. Removes multiply(4) from the call stack
// 8. Add square(5) in the call stack
// 9. Add multiply(5) in the call stack. It returns a value - 25.
// 10. Removes multiply(5) from the call stack
// 11. isRightTriangle returns 9+16 === 25
// 12. Returns true
// 13. Remove it from the call stack

const repeat = (str, times) => {
   let result = '';
   for(let i = 0; i < times; i++) {
      result += str;
   }
   return result;
};

const scream = (str) => {
   return str.toUpperCase() + '!!!';
};

const getRantText = (phrase) => {
   let text = scream(phrase);
   let rant = repeat(text, 8);
   return rant;
};

const makeRant = (phrase, el) => {
   const h1 = document.createElement('h1');
   h1.innerText = getRantText(phrase);
   el.appendChild(h1);
};

makeRant('I hate mayonnaise', document.body);
makeRant('If you have to cough, please cover your mouth', document.body);








