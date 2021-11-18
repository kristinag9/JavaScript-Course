// syntactically compact alternative to a regular function expression
const square = (x) => {
   return x * x;
};

console.log(square(2));

const isEven = (num) => {
   return num % 2 === 0;
};

console.log(isEven(3));
console.log(isEven(2));

const greet = () => {
   console.log("Hi!");
};

greet();

// Implicit return -> we do not need to write the return (one-line statement)
// const square = n => {
//   n * n;
// }
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const doubled = nums.map(n => n * 2);

console.log(doubled);

const parityList = nums.map((n) => {
   if(n % 2 === 0) {
      return 'even';
   }
   return 'odd';
});
const parityList = nums.map(n => n % 2 === 0 ? 'even' : 'odd');
console.log(parityList);