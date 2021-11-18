// Functions that operate on/with other functions
// Accepts other functions as arguments
function repeatNTimes(action, num) {
   for(let i = 0; i < num; i++) {
      action();
   }
}

function cry() {
   console.log("Boo hoo, I'm so sad");
}

console.log(repeatNTimes(cry, 13));

function pickOne(f1, f2) {
   let random = Math.random();
   console.log(random);
   if(random < 0.5) {
      f1();
   } else {
      f2();
   }
}

// Returns function
function multiplyBy(num) {
   return function(x) {
      return x * num;
   }
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

console.log(halve(6));
console.log(triple(4));

function makeBetweenFunc(x, y) {
   return function(num) {
      return num >= x && num <= y;
   }
}

const isChild = makeBetweenFunc(0,18);
console.log(isChild(5));  // true
console.log(isChild(67)); // false

const isInNineties = makeBetweenFunc(1990, 2000);
console.log(isInNineties(1989));
console.log(isInNineties(1992));
console.log(isInNineties(2000));