// for(initExpr; condition; incrementExpr)
for(let x = 0; x < 10; x++) {
   console.log('Hello...!', x);
}

console.log('\n');

for(let x = 0; x < 10; x += 2) {
   console.log('Hello...!', x);
}

for(let num = 1; num < 20; num++){
   console.log(`${num}x${num} = ${num * num}`);
}

for(let i = 200; i >= 0; i -= 25) {
   console.log(i, "Does it work?");
}
console.log("After the loop!");

// Infinite loops - ending condition is never met
for(let i = 1; i !== 20 ; i += 2) {
   console.log(i);
}

// For loops & arrays
// const examScores = [98, 77, 84, 91, 57, 66];
// for(let score = 0; score < examScores.length; score++) {
//    console.log(score, examScores[score]);
// }

const myStudents = [
   {
      firstName: 'Zeus',
      grade: 86
   },
   {
      firstName: 'Artemis',
      grade: 97
   },
   {
      firstName: 'Hera',
      grade: 72
   },
   {
      firstName: 'Apollo',
      grade: 90
   }
];

for(const obj of myStudents) {
   console.log(obj);
}

for(const obj of myStudents) {
   console.log(obj.firstName);
}

for(const obj of myStudents) {
   console.log(obj.grade);
}

for(let i = 0; i < myStudents.length; i++) {
   let student = myStudents[i];
   console.log(`${student.firstName} scored ${student.grade}`);
}

let total = 0;
for(let i = 0; i < myStudents.length; i++) {
   let student = myStudents[i];
   total += student.grade;
}
console.log(total / myStudents.length);

const word = 'stressed';
let reversedWord = "";
for(let i = word.length - 1; i >= 0; i--) {
   reversedWord += word[i];
}
console.log(reversedWord);