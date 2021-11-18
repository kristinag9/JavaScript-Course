
// Logical AND (&&)
let password = 'chickenGal';

if(password.length >= 8 && password.indexOf(' ') === -1) {
   console.log('Valid password');
} else {
   console.log('Invalid password');
}

let num = 3;

//[1,10]
if(num >= 1 && num <= 10) {
   console.log('Number is between 1 and 10');
} else {
   console.log('Please, quess a number between 1 and 10');
}

// Logical OR (||)
let age = 76;

if(age < 6 || age >= 65) {
   console.log('You get in for free');
} else {
   console.log('You must pay!');
}

let color = 'purple';

if(color === 'purple' || color === 'lilac' || color === 'violet') {
   console.log('Great choice');
}

// Logical NOT (!)
let loggedInUser;

if(!loggedInUser) {
   console.log('Get out of here');
}

let flavor = 'grape';

if(!(flavor === 'grape' || flavor === 'cherry')) {
   console.log('We do not have that flavor');
}

if(flavor !== 'grape' && flavor !== 'cherry') {
   console.log('We do not have that flavor');
}

// Ternary operator
// condition ? expIfTrue : expIfFalse
let num = 7;
num === 7 ? console.log('Lucky') : console.log('Bad');

let statuss = 'offline';
let color = statuss === 'offline' ? 'red' : 'green';