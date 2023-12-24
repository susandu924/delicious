// Arrays
// const myArray = [];

// add elements to an array, count from index zero
// myArray[0] = "Susan"
// myArray[1] = 1001;
// myArray[2] = false;

// // refer to an array
// console.log(myArray);

// // length property
// console.log(myArray.length);
// console.log(myArray[myArray.length - 1]);
// console.log(myArray[0]);

// myArray.push("school");
// console.log(myArray);
// const lastItem = myArray.pop();
// // .pop() pulls out last item from
// console.log(lastItem);

// const newLength = myArray.unshift(42);
// // unshift adds to array at beginning. push adds to end
// // when you assign variables to an add method like unshift, or push, it is the new length of the array thats returned. push, and unshift add to array
// // pop removes from end and shift removes from front of array
// console.log(newLength);

// const firstItem = myArray.shift();
// console.log(firstItem);
// // returns first item
// console.log(myArray[2]);

// causes undefined and leaves the index
// delete myArray[1];

// myArray.splice(1, 1);
// where you want to start and second value is how many you want to delete

// if you want to replace the first and second position, you can put a myArray.splice(1, 2, ) splice can be used to delete, splice can be used to replace. if you dont want to delete, you can just put a zero in the second position. 
// myArray.splice(1, 0, 42);

// console.log(myArray);
// console.log(myArray[1]);

const myArrayA = ['A', 'B', 'C']
const myArrayB = ['D', 'E', 'F'];

const conArray = myArrayB.concat(myArrayA);
console.log(conArray);

// spread operator joins two array together, newer way than concat
const newArray1 = [...myArrayA, ...myArrayB];

const myArray = ['A', 'B', 'C', 'D', 'E', 'F'];

// const newArray = myArray.slice(2, 5);
// ['C', 'D', 'E'] doesnt include index 5, ends at 5

// newArray.reverse();

const newString = myArray.join();
// creates a string out of all the elements in the array
// A, B, C, D, E, F

const newArray = newString.split(",");
// puts back into an array

// console.log(newString);

console.log(newArray);

const equipShelfA = ["baseball", "football", "volleyball"];
const equipshelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"]; 

console.log(equipShelfA[2]);
//or
console.log(clothesShelfB[2]);

// two deminsional array
const equipDept = [equipShelfA, equipshelfB];
const clothesDept = [clothesShelfA, clothesShelfB]; 

console.log(equipDept[0][1]);
console.log(clothesDept[1][2]);

// 3-d array
const sportsStore = [equipDept, clothesDept];

console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][2]);





