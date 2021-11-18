console.log(3 + 4);
console.error("OH NOO!");
console.log(3 + 4, true, 'hello');

function findYearCentury(year) {
   if (year >= 1 && year <= 100) {
      console.log('I');
   } else if (year >= 101 && year <= 200) {
      console.log("II");
   } else if (year >= 201 && year <= 300) {
      console.log("III");
   } else if (year >= 301 && year <= 400) {
      console.log("IIII");
   } else if (year >= 401 && year <= 500) {
      console.log("IV");
   } else if (year >= 501 && year <= 600) {
      console.log("V");
   } else if (year >= 601 && year <= 700) {
      console.log("VI");
   } else if (year >= 701 && year <= 800) {
      console.log("VII");
   } else if (year >= 801 && year <= 900) {
      console.log("VIII");
   } else if (year >= 901 && year <= 1000) {
      console.log("IX");
   } else if (year >= 1001 && year <= 1100) {
      console.log("X");
   } else if (year >= 1101 && year <= 1200) {
      console.log("XI");
   } else if (year >= 1201 && year <= 1300) {
      console.log("XII");
   } else if (year >= 1301 && year <= 1400) {
      console.log("XIII");
   } else if (year >= 1401 && year <= 1500) {
      console.log("XIV");
   } else if (year >= 1501 && year <= 1600) {
      console.log("XV");
   } else if (year >= 1601 && year <= 1700) {
      console.log("XVI");
   } else if (year >= 1701 && year <= 1800) {
      console.log("XVII");
   } else if (year >= 1801 && year <= 1900) {
      console.log("XIX");
   } else if (year >= 1901 && year <= 2000) {
      console.log("XX");
   } else if (year >= 2001 && year <= 2100) {
      console.log("XXI");
   }
}
console.log(findYearCentury(100));
console.log(findYearCentury(1000));
console.log(findYearCentury(2000));