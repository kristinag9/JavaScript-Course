// collections of properties (key-value pair)
// using keys instead of indexes
const obj = {
   // ...
};

// creating objects
const fitBitData = {
   totalSteps: 308727,
   totalMiles: 211.7,
   avgCalorieBurn: 5755,
   workoutsThisWeek: '5 of 7',
   avgGoodSleep: '2:13'
};

console.log(fitBitData);

console.log(fitBitData.totalMiles);

// Valid keys: All keys are converted to strings (exc. for Symbols)

// Accessing object properties
const numbers = {
   100: 'one hundred',
   16: 'sixteen'
};

console.log(numbers);
//console.log(numbers.100);
console.log(numbers[100]);
console.log(numbers['100']);

// providing dynamic values
const palette = {
   red: '#eb4d4b',
   yellow: '#f9ca24',
   blue: '#30336b'
};

const palette2 = palette; // both of these variables are pointing to the same object in memory; they are referencing this object

let mysteryColor = 'yellow';

console.log(palette.blue);
//console.log(palette[yellow]); -> doesn't work
console.log(palette['blue']); // -> works !

console.log(palette[mysteryColor]); // not palette.mysteryColor

// Adding and updating properties
const userReviews = {};

userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;
userReviews.colt = 5
userReviews['queenBee49'] += 2;
userReviews.mrSmith78++;

console.log(userReviews);

// Nested arrays and objects
const student = {
   firstName: 'David',
   lastName: 'Jones',
   strengths: ['Music', 'Art'],
   exams: {
      midterm: 92,
      final: 88
   }
};

const avg = (student.exams.midterm + student.exams.final) / 2;
console.log(avg);

console.log(student.strengths[1]);

const game = {
   player1: {
      username: 'Blue',
      playingAs: 'X'
   },
   player2: {
      username: 'Muffins',
      playingAs: '0'
   },
   board: [
      ['0', null, 'X'],
      ['X', '0', 'X'],
      [null, '0', 'X']
   ]
}

// array/object equality
let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;

console.log(nums === mystery); // false because they are referencing different addresses in memory
console.log(nums == mystery); // false because they are referencing different addresses in memory

console.log(nums === moreNums); // true
console.log(nums == moreNums); // true

// [] === [] -> false
// {} === {} -> false
// {a:1} === {a:1} -> false
// let data1 = {a:1}
// let data2 = data1
// data1 === data2 -> true

