// using instead of promises syntax
// async functions always return a promise

function greet() {
   return 'HELLO'; // returns the string
}

async function greet() {
   return 'HELLO'; // returns tpromise
}

// it the function returns a value, the promise will be resolved with this value

// if the function throws an exception, the promise will be rejected

async function add(x, y) {
   if(typeof x !== 'number' || typeof y !== 'number') {
      throw 'X and Y must be numbers';
   }
   return x + y;
}

// we can only use the await keyword inside of function declared with async

// await will pause the execution of the function, waiting for a promise to be resolved
async function getPlanets() {
   const res = await axios.get('...');
   console.log(res.data);
}

// Error handling in async functions
async function getPlanets() {
   try {
      const res = await axios.get('...');
      console.log(res.data);
   } catch(e) {
      console.log(e);
   }
}

// Sequential requests
async function get3pokemon() {
   const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
   const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
   const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
   console.log(poke1.data);
   console.log(poke2.data);
   console.log(poke3.data);
}

// Parallel requests
async function get3pokemon() {
   const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
   const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
   const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
   const poke1 = await prom1;
   const poke2 = await prom2;
   const poke3 = await prom3;
   console.log(poke1.data);
   console.log(poke2.data);
   console.log(poke3.data);
}

// Promise.all
async function get3pokemon() {
   const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
   const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
   const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
   const result = await Promise.all([ prom1, prom2, prom3 ]);
   printPokeon(results);
}

function printPokemon(results) {
   for(let pokemon of results) {
      console.log(pokemon);
   }
}

// difference
function changeBodyColor(color, delay) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         document.body.style.backgroundColor = color;
         resolve();
      }, delay);
   });
}

// async function lightShow() {
//    await changeBodyColor('teal', 1000);
//    await changeBodyColor('pink', 1000);
//    await changeBodyColor('indigo', 1000);
//    await changeBodyColor('violet', 1000);
// }

async function lightShow() {
   const p1 = await changeBodyColor('teal', 1000);
   const p2 = await changeBodyColor('pink', 1000);
   const p3 = await changeBodyColor('indigo', 1000);
   const p4 = await changeBodyColor('violet', 1000);
   await p1;
   await p2;
   await p3;
   await p4;
}