// Allow an iterable such as an array to be 'expanded' in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected
// syntax: (...x) -> always three dots

// spread for FUNCTION calls
Math.max(3,4,5,6,7,8,99);

const nums = [45, 23, 12, 34, 5];
const maxNum = Math.max(...nums);
console.log(maxNum);

function giveMeFour(a, b, c, d) {
   console.log('a', a);
   console.log('b', b);
   console.log('c', c);
   console.log('d', d);
}

const colors = ['red', 'orange', 'yellow', 'green'];

giveMeFour(...colors);

// spread in array literals -> created a new array using an existing array. Spreads the element from one array into a new array
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

console.log([...nums1, nums2]);     // [1,2,3,4,5,6]
console.log(['a', 'b', ...nums2]);  //["a", "b", 4, 5, 6]\
console.log([...nums1, nums2, 7, 8, 9]);     // [1,2,3,4,5,6,7,8,9]

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];
const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];
const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods];
console.log(mollusca);
console.log(['garden slug', ...gastropods, ...cephalopods]);
const inverts = [...cnidaria, ...gastropods, ...cephalopods];
console.log(inverts);

const cephCopy = [...cephalopods];
console.log(cephCopy);

console.log("abcdefg".split(''));
console.log([..."abcdefg"]);

// Spread in object literals
const feline = {
   legs: 4,
   family: 'Felidae'
};

const canine = {
   family: 'Caninae',
   furry: true
};

const dog = {
   ...canine,
   isPet: true,
   adorable: true
};

const houseCat = {
   ...feline,
   isGrumpy: true,
   personality: 'unpredictable'
};

const catDog = {
   ...canine,
   ...feline
};

const tripod = {
   ...canine,
   legs: 3
};

const catDogClone = {
   ...catDog
};

console.log(feline);
console.log(houseCat);
console.log(catDog);
console.log(tripod);
console.log(catDogClone === catDog);

// [...dog] -> false -> we can't spread objects
// Math.max(...dog) => false
// {[...4,5,6]} => {0: 4, 1: 5, 2: 6}
// {...'asdadsa'}

// spreading a string
const random = [
   ...'hello',
   {...catDog}
]

console.log(random);

