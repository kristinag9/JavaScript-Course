function rollDie() {
   let roll = Math.floor(Math.random() * 6) + 1;
   console.log(`Rolled: ${roll}`);
}

//rollDie();

function throwDice(numRolls) {
   for(let i = 0; i < numRolls; i++){
      rollDie();
   }
}

throwDice(6);

function greet(name) {
   console.log(`Hi, ${name}!`);
}

greet('Krisi');

function avg(...numbers) {
   let avg = 0;
   let count = 0;
   let numLength = numbers.length;
   for(let num of numbers) {
      count += num;
   }
   avg = count/numLength;
   console.log(`Average: ${avg}`);
}

avg(2,4);

// return statement
// // it ends function execution AND specifies the value to be returned by that function
function containsPurple(arr) {
   for(let color of arr) {
      if(color === 'purple' || color === 'magenta') {
         return true;
      }
   }
   return false;
}

console.log(containsPurple(['blue', 'pink', 'purple']));

function avg(arr) {
   const arrLength = arr.length;
   let total = 0;
   for(let num of arr) {
      total += num;
   }
   return total / arrLength;
}

console.log(avg([0, 50]));
console.log(avg([75, 76, 80, 95, 100]));

// Variable scope where we have access to this variable
let bird = 'mandarin duck';

function birdWatch() {
   let bird = 'golden pheasant';
   console.log(bird);
}
birdWatch();
console.log(bird);

// Block scope
if(true) {
   const animal = 'eel';
   console.log(animal);
}
console.log(animal); // undefined

// // If we declare a variable with var in a block, it is not scoped to that block ! ! !
// // we can use it outside the block
if(true) {
   var animal = 'eel';
   console.log(animal);
}
console.log(animal); // eel; eel;

let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
var i = 10;
for(var i = 0; i < animals.length; i++) {
   console.log(i, animals[i]);
}
console.log(i); // 0 "" 1 "" 2 "" 3

let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
var i = 10;
for(let i = 0; i < animals.length; i++) {
   console.log(i, animals[i]);
}
console.log(i); // 0 "" 1 "" 2 "" 10 -> looking fo the i outside the for loop

// var IS NOT BLOCK SCOPED
// let IS BLOCK SCOPED

function doubleArr(arr) {
   const result = [];
   let double;
   for(let num of arr) {
      double = num * 2;
      result.push(double);
   }
   console.log(double); // if is let in the for loop  -> not defined
   return result;
}

console.log(doubleArr([1,3,5]));

// LEXICAL SCOPE
function outer() {
   let hero = 'Black Panther';

   function inner() {
      let cryForHelp = `${hero}, please, save me!`;
      console.log(cryForHelp);
   }

   //inner();
}

console.log(outer());

// Function expression
function add(x, y) {
   return x + y;
}

function subtract(x, y) {
   return x - y;
}

function multiply(x, y) {
   return x * y;
}

function divide(x, y) {
   return x / y;
}

const sum = (x, y) => {
   return x + y;
}

// Functions are objects !!!
const operations = [add, subtract, multiply, divide];

console.log(operations[1]); // returns the first function
console.log(operations[1](100, 4)); // returns the result of the first function

for(let func of operations) {
   let result = func(30, 5);
   console.log(result);
}

const thing = {
   doSomething: multiply
}

console.log(thing.doSomething(50, 2));