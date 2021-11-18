// let j = 0;
// while(j <= 5) {
//    console.log(j);
//    j++;
// }

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(guess !== target) {
   console.log(`Target: ${target} Guess: ${guess}`);
   guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('Congrats, you win!');

// break
for(let i = 0; i < 10; i++) {
   console.log(i);
   if(i === 5) {
      break;
   }
}

while(true) {
   if(target === guess) {
      break;
   }
   guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('Congrats, you win!');
