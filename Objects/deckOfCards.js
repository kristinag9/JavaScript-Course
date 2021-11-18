// function makeDeck() {
//    const deck = [];
//    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
//    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
//    for(let value of values.split(',')) {
//       for(let suit of suits) {
//          deck.push({
//             value,
//             suit
//          });
//       }
//    }
//    return deck;
// }

// const mainDeck = makeDeck();

// function drawCard(deck) {
//    return deck.pop();
// }

// console.log(myDeck);

// const card1 = drawCard(mainDeck);
// console.log(card1);

// const myDeck = {
//    deck: [],
//    drawnCards: [],
//    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
//    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
//    initializeDeck() {
//       const {
//          suits,
//          values,
//          deck
//       } = this;
//       for(let value of values.split(',')) {
//          for(let suit of suits) {
//             deck.push({
//                value,
//                suit
//             });
//          }
//       }
//       return deck;
//    },
//    drawCard() {
//       const card = this.deck.pop();
//       this.drawnCards.push(card);
//       return card;
//    },
//    drawMultiple(numCards) {
//       const cards = [];
//       for(let i = 0; i < numCards; i++) {
//          cards.push(this.drawCard());
//       }
//       return cards;
//    },
//    shuffle() {
//       // destructuring
//       const {
//          deck
//       } = this;
//       // loop over array backwards
//       for(let i = deck.length - 1; i > 0; i--) {
//          // pick random index before current element
//          let j = Math.floor(Math.random() * (i + 1));
//          // swap
//          [deck[i], deck[j]] = [deck[j], deck[i]];
//       }
//    }
// }

const makeDeck = () => {
   return {
      deck: [],
      drawnCards: [],
      suits: ['hearts', 'diamonds', 'spades', 'clubs'],
      values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
      initializeDeck() {
         const {
            suits,
            values,
            deck
         } = this;
         for(let value of values.split(',')) {
            for(let suit of suits) {
               deck.push({
                  value,
                  suit
               });
            }
         }
         return deck;
      },
      drawCard() {
         const card = this.deck.pop();
         this.drawnCards.push(card);
         return card;
      },
      drawMultiple(numCards) {
         const cards = [];
         for(let i = 0; i < numCards; i++) {
            cards.push(this.drawCard());
         }
         return cards;
      },
      shuffle() {
         // destructuring
         const {
            deck
         } = this;
         // loop over array backwards
         for(let i = deck.length - 1; i > 0; i--) {
            // pick random index before current element
            let j = Math.floor(Math.random() * (i + 1));
            // swap
            [deck[i], deck[j]] = [deck[j], deck[i]];
         }
      }
   }
}

const myDeck = makeDeck();
console.log(myDeck.initializeDeck());
console.log(myDeck.shuffle());
console.log(myDeck);

const deck2 = makeDeck();
console.log(deck2.initializeDeck());
console.log(deck2.shuffle());
console.log(deck2);

console.log(myDeck.initializeDeck());
console.log(myDeck.shuffle());
console.log(myDeck.drawCard());
console.log(myDeck.drawMultiple(4));
