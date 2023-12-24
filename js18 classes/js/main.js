
// Javascript Classes
class Pizza {
    //public field
    crust = "gluten free";
    // #private field
    #sauce = "traditional";
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }

    getCrust() {
        return this.crust;
    };

    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    };
    hereYouGo() {
        console.log(
            `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
}

const myPizza = new Pizza("small");
myPizza.hereYouGo();
console.log(myPizza.getCrust())


// // child class
// class SpecialityPizza extends Pizza {
//     constructor(pizzaSize) {
//         //in a constructor before we can use the keyword this, we have to call with the keyword super which calls the constructor of the parent class
//         super(pizzaSize);
//         this.type = "The Works";
//     }
//     slice() {
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`)
//     }
// }

// const mySpeciality = new SpecialityPizza("medium");
// mySpeciality.slice();



// const myPizza = new Pizza("pepperoni", "small");
// myPizza.setCrust("gluten free");
// myPizza.setToppings("pepperoni");
// myPizza.setToppings(" sausage");
// myPizza.setToppings(" mozarella");
// console.log(myPizza.getToppings());
// // myPizza.type = "supreme";
// myPizza.bake();
// console.log(myPizza.getCrust());
// console.log(myPizza.pizzaCrust)