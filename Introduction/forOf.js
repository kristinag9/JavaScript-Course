//for iterating over arrays
// for (variable of iterable) { statement }
let subreddits = ['soccer', 'popheads', 'crinae', 'books'];
for(let obj of subreddits) {
   console.log(obj);
}

for(let char of 'hello') {
   console.log(char.toUpperCase());
}

// comparing for and for...of
const magicSquare = [ [2, 7, 6], [9, 5, 1], [4, 3, 8] ];

for(let i = 0; i < magicSquare.length; i++) {
   let row = magicSquare[i];
   let sum = 0;
   for(let j = 0; j < row.length; j++) {
      sum += row[j];
   }
   console.log(`${row} summed to ${sum}`);
}

// // OR

for(let row of magicSquare) {
   let sum = 0;
   for(let num of row) {
      sum += num;
   }
   console.log(`${row} summed to ${sum}`);
}

const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for(let i = 0; i < words1.length; i++) {
   console.log(`${words1[i]}${words2[i]}`);
}

// for ... of with objects
const movieReviews = {
   Arrival: 9.5,
   Alien: 9,
   Amelie: 8,
   'In Bruges': 9,
   Amadeus: 10,
   'Kill Bill': 8,
   'Little Miss Sunshine': 8.5,
   Coraline: 7.5
};

// movieReviews is not iterable
// NOT right
for(let x of movieReviews) {
   console.log(x);
}

// YES
console.log(Object.keys(movieReviews)); // take te keys
console.log(Object.values(movieReviews)); // take the values

for(let movie of Object.keys(movieReviews)) {
   console.log(movie);
}

const ratings = Object.values(movieReviews);
let total = 0;
for(let value of ratings) {
  total += value;
}
let average = total / ratings.length;
console.log(average);

for(let movie of Object.keys(movieReviews)) {
   console.log(movie, movieReviews[movie]);
}

console.log(Object.keys(movieReviews)[1]);
console.log(Object.keys(movieReviews)[5]);