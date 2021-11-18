// The arguments object !!!

// Looks like spread but it's not!
// the opposite of spread; collects element in single array
// Available in every function
// Not available inside arrow functions

function sum2() {
   const argsArr = [...arguments];
   return argsArr.reduce((total, currVal) => {
      return total + currVal;
   });
}
console.log(sum2(2,3,3,4,4));

// Rest -> collects all remaining arguments into an actual array

function sum(...nums) {
   let sum = 0;
   for(const i of nums) {
      sum += i;
   }
   return sum;
}

console.log(sum(2,3,3,4,4));

// the rest parameter must be the last parameter
function fullName(first, last, ...titles) {
   console.log(first);
   console.log(last);
   console.log(titles);
}

fullName('krisi', 'tsekova', 'Title1', 'Title2', 'Title3');