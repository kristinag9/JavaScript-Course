// Default parameters
function multiply(a, b = 1) {
   return a * b;
}

// all default parameters need to come at the end of the parameter list
const greet = (person, greeting = "Hi", punctuation = '!') => {
   console.log(`${greeting}, ${person} ${punctuation}`);
}

console.log(greet('Tim'));

const blah = (x, y = [1, 2, 3]) => {
   console.log(x, y);
}

blah(2);