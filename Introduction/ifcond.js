if (1 === 1) {
   console.log("It's true!");
} else {
   console.log("It's false!");
}

let rating = 3;
if (rating === 3) {
   console.log("You are a superstar!");
} else if (rating === 2) {
   console.log("Meets expectations");
} else if (rating === 1) {
   console.log("Needs improvement");
} else {
   console.log("Invalid rating");
}

let num = 37;
if (num % 2 !== 0) {
   console.log("Odd number");
}

let highScore = 1430;
let userScore = 1600;

if(userScore >= highScore) {
   console.log(`Congrats, you have a new high score of ${userScore}`);
   highScore = userScore;
} else {
   console.log(`Good game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}