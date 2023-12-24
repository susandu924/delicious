// var, let, const all used initialize variables in js
// var used until 2015, now called legacy code
// var x = 1;
// var x = 2;
// console.log(x);

// // both var and let allow reassignment

// // use const whenever you can unless you know you are going to reassign

// // Global Scope
// // define a variable and its available everywhere. can go into a function. 
// let y = 2;
// // const x = 3;

// // Local Scope
// // 1/ Block Scope 
// {
//   let y = 4;
//   console.log(y);
// }
// //  2/ Function Scope
// function myFunc() {
//   const z = 5;
//   console.log(y);
//   // Local Scope
// // 1/ Block Scope 
// {
//   let y = 4;
//   console.log(y);
// }
// }
// // gotta call the function
// myFunc();
// // curlies are creating local scope

// global scope example
var x = 1;  //function scoped
let y = 2; //block scoped
const z = 3;

console.log(`global: ${x}`); 
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myfunc() {
  var x = 10;
  const z = 5;
  console.log(`function: ${x}`); 
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);

  {
    console.log(`block: ${x}`); 
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
}

myfunc();