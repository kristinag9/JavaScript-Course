// for(var in object) {statement}

// object -> not iterable -> not for .. of
const jeopardyWinnings = {
   regularPlay: 2522700,
   watsonChallenge: 300000,
   tournamentOfChampion: 500000,
   battleOfTheDecades: 100000
};

for(let prop in jeopardyWinnings) {
   console.log(prop);
   console.log(jeopardyWinnings[prop]);
}

let total = 0;
for(let prop in jeopardyWinnings) {
   total += jeopardyWinnings[prop];
}
console.log(`Total: ${total}`);

// Arrays are objects => we can use for .. in with them
// looping over the indexes
// DO NOT use for .. in with an array
for(let k in [88, 99, 77, 66]) {
   console.log(k);
}