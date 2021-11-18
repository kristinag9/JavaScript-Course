// A short, clean syntax to 'unpack' values from arrays or properties from objects into distinct variables

// DESTRUCTURING ARRAYS
const raceResults = [
   'Eluid Kipchoge',
   'Feyisa Lelisa',
   'Galen Rupp',
   'Ghirmay Ghebreslassie',
   'Alphonce Sumbu',
   'Jared Ward'
];

const gold = raceResults[0];
console.log(gold);
const silver = raceResults[1];
console.log(silver);
const bronze = raceResults[2];
console.log(bronze);

const [gold, silver, bronze] = raceResults; // take the first three elements
console.log(gold);
console.log(silver);
console.log(bronze);

const [first, , , fourth] = raceResults; // the 1st and the 4th elements
console.log(first);
console.log(fourth);

const [winner, ...others] = raceResults; // the 1st and all others
console.log(winner);
console.log(others);

// DESTRUCTURING OBJECTS
// make the variables based on the name of the property
const runner = {
   first: "Eliud",
   last: "Kipchoge",
   country: "Kenya",
   title: "Elder of the Order of the Golden Heart of Kenya"
};

const { first, last, country } = runner;
console.log(first);
console.log(last);
console.log(country);

const {
   first,
   last,
   time
} = runner;

const {
   country: nation,
   title: honorific
} = runner;

console.log(nation);
console.log(honorific);

const {first, last, ...other} = runner;
console.log(first);
console.log(last);
console.log(other); // -> other is not defined

// NESTED DESTRUCTURING
const results = [
   {
      first: "Eluid",
      last: "Kipchoge",
      country: 'Kenya',
   },
   {
      first: "Feyisa",
      last: "Lilesa",
      country: 'Ethiopia',
   },
   {
      first: "Galen",
      last: "Rupp",
      country: 'United States'
   }
];

const [
   {
      first: goldWinner
   },
   {
      country
   }
] = results;

console.log(goldWinner);
console.log(country);

// DESTRUCTURING PARAMETERS
const runner1 = {
   first: "Eluid",
   last: "Kipchoge",
   country: 'Kenya',
   title: "Elder of the Order of the Golden Heart of kenya"
}

function print(person) {
   const {first, last, title} = person;
   console.log(`${first} ${last}, ${title}`);
}
print(runner1);

function print2({first, last, title}) {
   console.log(`${first} ${last}, ${title}`);
}
print2(runner1);

const response = [
   'HTTP/1.1',
   '200 OK',
   'application/json'
]

function parseResponse([protocol, statusCode, contentType]) {
   console.log(`Status: ${statusCode}`);
}

parseResponse(response);
