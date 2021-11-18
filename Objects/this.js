function sayHi() {
   console.log('Hi');
   console.log(this); // points to the global scope
}

console.log(sayHi());

var color = 'pink';
console.log(window.color);

const person = {
   first: 'Cherilyn',
   last: 'Sarkisian',
   nickName: 'Cher',
   fullName() {
      return `${this.first} ${this.last} AKA ${this.nickName}`;
   },
   printBio() {
      console.log(this);
      const fullName = this.fullName();
      console.log(`${fullName} is a person`)
   },
   laugh: () => {
      console.log(this);
      console.log(`${this.nickName} says HAHAHAHA`);
   }
}

console.log(person.fullName());
const printBio = person.printBio;

// The value of this depends on the invocation context the function it is used in