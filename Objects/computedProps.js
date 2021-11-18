// objects with dynamic keys

const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

// const team = {};
// team[role] = person;
// team[role2] = person2;

// We can use a variable as a key name in an object literal property
const user = 'Jools';
const userRoles = {
   [user]: 'Admin'
};
console.log(userRoles);

const team = {
   [role]: person,
   [role2]: person2,
   [1 + 6 + 9]: 'sixteen'
}
console.log(team);

// function addProp(obj, k, v) {
//    const copy = {...obj};
//    copy[k] = v;
//    return copy;
// }

// const addProp = (obj, k, v) => {
//    return {
//       ...obj,
//       [k]: v
//    }
// }

const addProp = (obj, k, v) => ({...obj, [k]:v })

const res = addProp(team, 'happy', ':)');
console.log(res);
