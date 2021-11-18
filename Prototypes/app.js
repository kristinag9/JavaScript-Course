// arr.includes(2) -> this method is not defined on every arr, but on the prototype of the Array
// Array.prototype
// String.prototype -> bunch of methods
String.prototype.grumpus = () => alert("Go away!");
const cat = "Blue";
cat.grumpus();

String.prototype.yell = function() {
   return `OMG!!! ${this.toUpperCase()}!!! AGAGA`;
};

console.log('I love you'.yell());

// factory functions
function hex(r, g, b) {
   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
   return `rgb(${r}, ${b}, ${g})`;
}

// factory function
function makeColor(r, g, b) {
   const color = {}; // an empty object
   color.r = r;      // add some properties to it
   color. g = g;
   color.b = b;
   color.rgb = function() { // add some methods to it
      const {r,g,b} = this;
      return `rgb(${r}, ${g}, ${b})`
   };
   color.hex = function() {
      const {r,g,b} = this;
      return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
   }
   return color; // returning the object
}

const firstColor = makeColor(35, 255, 150);
console.log(firstColor.rgb());
console.log(firstColor.hex());
