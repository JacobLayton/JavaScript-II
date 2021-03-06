// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let myFunction = () => { return "something" };
console.log(myFunction());


// let anotherFunction = function (param) {
//   return param;
// };
let anotherFunction = param => { return param }
console.log("Hello");


// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (param1, param2) => param1 + param2;
console.log(add(3,4))

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2); //?
let subtract = (param1, param2) => param1 - param2;
console.log(subtract(5,9));

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
const triple = exampleArray.map( tripFunc = num => {return num * 3} );
console.log(triple);