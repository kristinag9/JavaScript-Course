// We can add functions as properties on objects
const add = function(x, y) {
   return x + y;
}

const math = {
   numbers: [1, 2, 3, 4, 5],
   add: function(x, y) {
      return x + y;
   },
   multiply: function(x, y) {
      return x * y;
   }
}

console.log(math.numbers);
console.log(math.add(...math.numbers));
console.log(math.multiply(...math.numbers));

const auth = {
   username: 'TommyBot',
   login: () => {
      console.log('Logged you in!');
   },
   logout() {
      console.log('Goodbye');
   }
}