// Functions

//Function Declaration syntax
// Functions provide reusable code

const toPropercase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toPropercase("september"));

// Arrow Function:
// const getUserNameFromEmail = (email) => {
//     return email.slice(0, email.indexOf("@"));
//   }

// // Anonymous Function:
// const getUserNameFromEmail = function (email) {
//   return email.slice(0, email.indexOf("@"));
// }

// function getUserNameFromEmail(email) {
//   return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserNameFromEmail("playerOne@gmail.com"));

// function sum(num1, num2) {
//   if (num2 === undefined) {
//     return num1 + num1;
//   }
//   return num1 + num2; 
// }
// //function needs to be called into action, return doesnt call it
// console.log(sum(2));


