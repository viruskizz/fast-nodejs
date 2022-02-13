// declare variable
// starting with lowercase
// use camelcase for spacing
// not start with number or spcial characters
// understandable variable name
var name = 'Araiva';
var a = 2;  // weak variable, not recommend
let b = 10; // scope variable, recommend
let myName = 'Eve';
const base = 'x';

console.log(name + b);
console.log(myName);
var name = 'Eve';
b = 100;
console.log(name + b + base);
console.log(`My name is ${myName} have money ${a}${base} bath`);
console.log('My name is ' + myName + ' have money ' + a + base + 'bath');