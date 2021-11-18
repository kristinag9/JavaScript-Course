let topSongs = [
   'First time ever I saw your face',
   'God only knows',
   'A day in the life',
   'Life on Mars'
];

topSongs.push('New song');
topSongs.push(true); // returns the new length

const nextSong = topSongs.pop(); // removes the last value and returns it

// shift and unshift
let dishesToDo = ['big platter'];
dishesToDo.unshift('large plate');
dishesToDo.unshift('small plate');
dishesToDo.unshift('cereal bowl');
dishesToDo.unshift('mug');
dishesToDo.unshift('dirty spoon');
dishesToDo.unshift('fork', 'knife');

dishesToDo.shift(); // removes dirty spoon
dishesToDo.shift(); // removes mug ...

// concat
let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast'];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

let allFood = fruits.concat(veggies, meats);

// includes -> returns true or false
// to find if an element exists
let ingredients = [
   'water',
   'corn starch',
   'flour',
   'cheese',
   'brown sugar',
   'shrimp',
   'eel',
   'butter'
];

ingredients.includes('fish');     // false
ingredients.includes('shrimp');   // true
ingredients.includes('corn');     // false

ingredients.includes('water', 3); // after index 3 -> false
ingredients.includes('water', 0); // true

if(ingredients.includes('flour')) {
   console.log('I cannot eat that');
}

// indexOf -> returns the index on which an element is found
// to find where is the element
ingredients.indexOf('eel'); // 6
ingredients.indexOf('apple'); // -1

ingredients.indexOf('cheese', 5); // -1
ingredients.indexOf('cheese', 2); // 3

if(ingredients.indexOf('flour') !== -1) {
   console.log('Found');
}

// reverse -> reverses an array; does not make a copy
let letters = [ 'T', 'C', 'E', 'P', 'S', 'E', 'R' ];
letters.reverse(); // R, E ... T

[1, true, 123, 'dsds']. reverse(); // reverses it

// join
letters.join();      // "T,C,E,P,S,E,R"
letters.join('&');   // "T&C&E&P&S&E&R"
letters.reverse().join('.');   // "R.E.S.P.E.C.T"
letters.reverse().join('-');   // "R-E-S-P-E-C-T"

[12.3, 60, false].join(); // "12.3,60,false"

// slice
let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];
let swimmers = animals.slice(0, 3); // 2 is not included =>
                                     // ["shark". "salmon", "whale"]
let mammals = animals.slice(2, 4); // ["whale", "bear"]
let reptiles = animals.slice(4, 6); // ["lizard", "tortoise"]
                                    // slice(4) also

let quadruped = animals.slice(-3);  // ["bear", "lizard", "tortoise"]

animals.slice(-3, -1); // "["bear", "lizard"]"
let copy = animals.slice(); // copy of the entire array

// splice(startIndex, deleteCount, itemsToInsert)
let animals1 = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

animals1.splice(1, 0, 'octopus'); // add 'octopus' after 'shark'
animals1.splice(3, 2); // ["whale", "bear"] -> deletes them
animals1.splice(3, 0, 'snake', 'frog'); // removes 0 elements, adds 'snake' and 'frog' after salmon and before lizard

// replacing shark and octopus with uppercase versions
animals1.splice(0, 2, 'shark'.toUpperCase, 'octopus'.toUpperCase);

// sort
let people = [ 'Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne' ];
people.sort(); // sort them alphabetically

let nums = [34, 10, 10000, 69, 99];
nums.sort(); // 10, 10000, 34, 69, 99


// const
const city = "Lisbon";
console.log(city); // "Lisbon"
city = "London"; // error

// values can be changed
const myEggs = ['brown', 'brown'];
// myEggs array points to some addresses in the memory
myEggs.push('purple');
myEggs[0] = 'green';

// BUT
myEggs = ['blue', 'pink']; // NO
// Arrays are reference types and that's why we use const all the time

// nested arrays
const animalPairs = [
   [ 'doe', 'buck' ],
   [ 'ewe', 'ram' ],
   [ 'peahen', 'peacock' ]
];

animalPairs[2];    // ["peahen", "peacock"]
animalPairs[2][0]; // "peahen"
animalPairs[2][1]; // "peacock"
animalPairs[1][1]; // "ram"
animalPairs[0][1] = "stag";