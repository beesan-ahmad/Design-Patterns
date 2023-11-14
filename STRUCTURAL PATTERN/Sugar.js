// Sugar.js Class acts as a Concrete Decorators
const AddOn = require('./AddOn');

class Sugar extends AddOn {
    constructor(drink) {
        super("Sugar", drink);
    }

    // Implementing the abstract method
    getDescription() {
        return this.drink.getDescription() + " with Sugar";
    }

    // Implementing the abstract method
    cost() {
        return this.drink.cost() + 50;
    }
}

module.exports = Sugar;
