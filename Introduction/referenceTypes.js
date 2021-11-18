let fruit = "orange";
let color = fruit;
console.log(color); // "orange"
console.log(fruit); // "orange"
fruit = "watermelon";
console.log(fruit); // "watermelon"
console.log(color); // "orange"

let nums = [5,6,7,8]; // a reference to this array is stored
// nums = some address in memory
let otherNums = nums;
// otherNums = same address as nums

nums.push(9);  // 5
otherNums;     // [5,6,7,8,9]