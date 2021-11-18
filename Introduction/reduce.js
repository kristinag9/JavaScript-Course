// takes an array
// executes a reducer function on each element of that array
// resulting in a single value
// ACCUMULATOR -> the result from the last evaluation
// reduce(accumulator, currentValue)
const array = [3, 5, 7, 9, 11];
const reduced = array.reduce((accumulator, currentValue) => {
   return accumulator + currentValue;
});
console.log(reduced);

const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currentVal) => {
   return total * currentVal;
});
console.log(product);

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, curVal) => {
   // if(curVal > max) {
   //    return curVal;
   // }
   // return max;
   return Math.max(max, curVal);
})

console.log(maxGrade);
// max -> 87 curVal -> 64 => max is max
// max -> 87 curVal -> 96 => max is curVal
// max -> 96 curVal -> 92 => max is max
const minGrade = grades.reduce((min, curVal) => (
   Math.min(min, curVal)
));

console.log(minGrade);

// Initial starting value
const sum = [10, 20, 30, 40, 50].reduce((sum, curVal) => {
   return sum + curVal;
}, 1000);
console.log(sum);

// tallying
const votes = ['y', 'y', 'y', 'n', 'y', 'n', 'n', 'y', 'n', 'y'];
// y: count
// n: count
const results = votes.reduce((tally, val) => {
   if(tally[val]) {
      tally[val]++;
   } else {
      tally[val] = 1;
   }
   return tally;
}, {});
console.log(results);
