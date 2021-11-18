// Fetch API
// the newer way of making requests via JS
// supports promises
fetch('https://swapi.co/api/planets/')
   .then((response) => {
      if(!response.ok) {
         //console.log('Error not status 200', response.status);
         throw new Error(`Status code error: ${response.status}`);
      }
         response.json().then((data) => {
            for(let planet of data.results) {
               console.log(planet.name);
            }
         });

   })
   .catch((err) => {
      console.log('Something went wrong');
      console.log(err);
   });

// chaining fetch requests
const checkStatusAndParse = (response) => {
   if(!response.ok) {
      throw new Error(`Status code error: ${response.status}`);
   }
   return response.json();
}

const printPlanets = (data) => {
   for(let planet of data.results) {
      console.log(planet.name);
   }
   // const p = new Promise((resolve, reject) => {
   //       resolve();
   // });
   // return p;
   return Promise.resolve(data);
}

fetch('https://swapi.co/api/planets/')
   .then(checkStatusAndParse)
   .then(printPlanets)
   .then(checkStatusAndParse)
   .catch((err) => {
      console.log('Something went wrong');
      console.log(err);
   });