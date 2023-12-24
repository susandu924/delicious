// User Input

// alert("Hello World");
// confirm("OK === True\nCancel === False");
// let myBoolean = confirm("OK === True\nCancel === False");
// console.log(myBoolean);

let yourName = prompt("please enter your name.");
// console.log(typeof yourName); mine was an object, his was a string???
if (yourName) {
    console.log(yourName.length);
    console.log(yourName.trim().length);
console.log(yourName.trim());
} else {
    console.log( "You didn't enter your name."); 
}
// null can traslate as false
// nullish koleski operator ?? if name has a value,log to console, if null or undefined, put, you didnt enter your nameSusan