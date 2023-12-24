// Objects
// key-value pairs
// const myObj = {
//     name: "Susan",
//     sign: "Libra"
// };

// const anotherObj = {
//     alive: true,
//     answer: 42,
//     hobbies: ["Eat", "Sleep", "Code"],
//     beverages: {
//         morning: "coffee",
//         afternoon: "italian soda"
//     },
//     action: function() {
//         return `Time for ${this.hobbies[2]}`;
//     }
// }
// // the keyword this refers to the object
// console.log(myObj.name);
// console.log(anotherObj.hobbies[0]);
// console.log(anotherObj["beverages"].morning);
// console.log(anotherObj.action())

// const vehicle = {
//     wheels: 4,
//     engine: function() {
//         return "Vrooom!";
//     }
// }

// const truck = Object.create(vehicle);
// // pass in the vehicle object as a constructor for our truck object, based off the vehicle object
// truck.doors = 2;
// console.log(truck);
// console.log(truck.wheels);   //inheritance, inheriting from the vehicle object
// console.log(truck.engine());

// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function() {return "Whoooooosh!"};
// console.log(car.engine()); //over wrote the inherited method from the vehicle object 

// const tesla = Object.create(car);
// console.log(tesla);
// console.log(tesla.engine());

// tesla.engine = function() {
//     return "Shhhhhhh...";
// }
// console.log(tesla.engine());

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

// destructuring objects

// const { guitar: myVariable, bass: myBass } = band; 
// console.log(myVariable);
// console.log(myBass);

// const { vocals, guitar, bass, drums } = band; 
// // when destructuring this object we are creating 4 new variables, named the exact same as object, created 4 new variables
// console.log(vocals);

function sings({vocals}) {
    return `${vocals} sings!`
};
// call sings and pass in whole band object
console.log(sings(band))
// 

// band.keyboards = "SynthAngel";
// delete band.bass;
// console.log(band.hasOwnProperty("bass"));
// console.log(Object.keys(band));
// console.log(Object.values(band));

// for (let job in band) { //for in loop
//     console.log(`On ${job} it's ${band[job]}!`);
// }