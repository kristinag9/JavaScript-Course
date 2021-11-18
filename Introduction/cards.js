function pick(arr) {
   const index = Math.floor(Math.random() * arr.length);
   return arr[index];
}

function getCard() {
   const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
   const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

   const value = pick(values);
   const suit = pick(suits);

   return {
      suit,
      value
   };
}

console.log(getCard());