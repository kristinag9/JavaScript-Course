// ------------------------ forEach
// accepts a callback function once per element in the array
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
numbers.forEach(function (num) {
   console.log(num * 2);
})

const books = [{
   title: 'Hood omens',
   authors: ['terry Pratchett', 'Neil Gaiman'],
   rating: 4.25
},
{
   title: 'Good Omens',
   authors: ['Terry Pratchett', 'Neil Gaiman'],
   rating: 4.25,
   genres: ['fiction', 'fantasy']
},
{
   title: 'Changing my mind',
   authors: ['Zadie Smith'],
   rating: 3.83,
   genres: ['nonfiction', 'essays']
},
{
   title: 'Bone: The complete edition',
   authors: ['Jeff Smith'],
   rating: 4.42,
   genres: ['fiction', 'graphic novel', 'fantasy']
},
{
   title: 'American Gods',
   authors: ['Neil Gaiman'],
   rating: 4.11,
   genres: ['fiction', 'fantasy']
},
{
   title: 'A gentleman in Moscow',
   authors: ['Amor Towles'],
   rating: 4.36,
   genres: ['fiction', 'historical fiction']
},
{
   title: 'The Overstory',
   authors: ['Richard Powers'],
   rating: 4.19,
   genres: ['fiction', 'short stories']
},
{
   title: 'The way of kings',
   authors: ['Brandon Sanderson'],
   rating: 4.65,
   genres: ['fantasy', 'epic']
},
{
   title: 'Lord of the files',
   authors: ['William Golding'],
   rating: 3.67,
   genres: ['fiction']
}]

books.forEach(function(book) {
   console.log(book.title.toUpperCase())
})

// --------------------- map
// creates a new array with the results of calling a callback on every element in the array
const words = ['asap', 'byob', 'rsvp', 'diy'];
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

const doubles = numbers.map(function (num) {
   return num * 2;
});

const numDetail = numbers.map(function (num) {
   return {
      value: num,
      isEven: num % 2 === 0
   }
});

console.log(numDetail);

// instead of
const doubles2 = [];
for(let num of numbers) {
   doubles2.push(num * 2);
}

const wordDetail = words.map(function(word){
   return word.toUpperCase().split('').join('.');
});

console.log(wordDetail);

const bookTitles = books.map(function(book) {
   return book.title;
});

console.log(bookTitles);

// -------------------------- find
// returns the first element in the array that satisfies the provided testing function
let movies = [
   "The fantastic Mr. Fox",
   "Mr. and Mrs. Smith",
   "Mrs. Doubtfire",
   "Mr. Deeds"
];

const includeMrs = movies.find(movie => {
   return movie.includes('Mrs');
});

console.log(includeMrs);

const startsWithMrs = movies.find(movie => {
   return movie.indexOf("Mrs") === 0;
});

console.log(startsWithMrs);

const goodBook = books.find(book => {
   return book.rating >= 4.3;
});

const neilBook = books.find(book => book.authors.includes('Neil Gaiman'));

console.log(goodBook);
console.log(neilBook);

// ------------------------------ filter
// creates a new array with all elements that pass the test implemented by the provided function
const nums = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums.filter(n => n % 2 === 1);
console.log(odds);
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);
const moreThan50 = nums.filter(n => n > 50).sort((a, b) => a - b);
console.log(moreThan50);

const goodBooks = books.filter(b => b.rating > 4.3)
// console.log(goodBooks);
const fantasyBooks = books.filter(b => {
   b.genres.includes('fantasy')
});
console.log(fantasyBooks);
const smallBooks = books.filter(book => {
   book.genres.includes('short stories') || book.genres.includes('essays');
});
console.log(smallBooks);
const query = 'The';
const results = books.filter(book => {
   const title = book.title.toLowerCase();
   return title.includes(query.toLowerCase());
});
console.log(results);

// ------------------------ every
// tests whether all elements in the array pass the provided function. Returns boolean
const words2 = ["dog", "dig", "log", "bag", "wag"];
const hasLength3 = words2.every(word => word.length === 3);
console.log(hasLength3);
const lastIsG = words2.every(word => {
   const lastLetter = word.length - 1;
   return word[lastLetter] === 'g';
});
console.log(lastIsG);

// ----------------------------- some
// returns true if ANY of the array elements pass the test func
const startsWithE = words2.some(word => word.startsWith('e')
);
const startsWithD = words2.some(word => word[0] === 'd'
);

console.log(startsWithE);
console.log(startsWithD);

const allGoodBooks = books.every(b => b.rating > 3.5);
console.log(allGoodBooks);

const any2Authors = books.some(b => b.authors.length === 2);
console.log(any2Authors);

// ------------------------------ sort
arr.sort(compareFunc(a,b))
// - if compareFunc(a, b) returns less than 0 => sort a be4 b
// if compareFunc(a, b) returns 0 => leave a and b unchanged
// if compareFunc(a, b) returns greater than 0 => sort b be4 a

const prices = [400.50, 3000, 99.90, 35.99, 12.00, 9500];
const ascSort = prices.slice().sort((a, b) => a - b);
// a -> 400.5 b -> 3000 => a be4 b
// a -> 35.99 b -> 12.00 => b be4 a
console.log(ascSort);
console.log(prices);
const descSort = prices.sort((a, b) => b - a);
console.log(descSort);

const sortByRating = books.sort((a, b) => a.rating - b.rating);
console.log(sortByRating);

