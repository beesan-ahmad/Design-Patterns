// Milk.js Class acts as a Concrete Decorators
const AddOn = require('./AddOn');

class Milk extends AddOn {
    constructor(drink) {
        super("Milk", drink);
    }

    // Implementing the abstract method
    getDescription() {
        return this.drink.getDescription() + " with Milk";
    }

    // Implementing the abstract method
    cost() {
        return this.drink.cost() + 100;
    }
}

module.exports = Milk;
