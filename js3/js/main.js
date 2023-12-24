const myVariable = "Mathematic";

console.log(myVariable.length);

// String Methods
console.log(("Every good boy does fine").length);

console.log(myVariable.charAt(6));

console.log(myVariable.indexOf("at"));

console.log(myVariable.lastIndexOf("ath"));

console.log(myVariable.slice(5, 8));//slices from start to end mat will not return character at ending position

console.log(myVariable.toLocaleUpperCase());

console.log(myVariable.includes("mat"));
// true
console.log(myVariable.split("e")); 
console.log(myVariable.split("")); 
console.log("John, Joe,Dave".split(",")); 
// returns multiple stings in an array, empty returns every character as a seperate string in an array

console.log()