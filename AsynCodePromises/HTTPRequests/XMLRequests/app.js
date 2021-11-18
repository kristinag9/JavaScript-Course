// const myReq = new XMLHttpRequest();
// myReq.onload = function() {
//    const data = JSON.parse(this.responseText);
//    console.log(data);
// };
// myReq.onerror = function(err) {
//    console.log('ERROR!', err);
// };

// myReq.open('get', 'https://icanhazdadjoke.com/', true);
// myReq.setRequestHeader('Accept', ' application/json');
// myReq.send();

const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', () => {
//    console.log('It worked');
//    console.log(firstReq.responseText);
// });
// firstReq.addEventListener('load', function() {
//    console.log('It worked!');
//    console.log(this.responseText);
// });
// firstReq.addEventListener('load', function() {
//    console.log('It worked');
//    const data = JSON.parse(this.responseText);
//    for(let planet of data.results) {
//       console.log(planet.name);
//    }
// });
firstReq.addEventListener('load', function() {
   console.log('It worked');
   const data = JSON.parse(this.responseText);
   const filmURL = data.results[0].films[0];
   const filmReq = new XMLHttpRequest();
   filmReq.addEventListener('load', function() {
      console.log('Second request worked');
      const filmData = JSON.parse(this.responseText);
      console.log(filmData);
   });
   filmReq.open('GET', filmURL);
   filmReq.send();
   filmReq.addEventListener('error', function(e) {
      console.log('Error', e);
   })
});
firstReq.addEventListener('error', () => {
   console.log('Error');
});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();
console.log('Request sent');