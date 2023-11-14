// HouseBlend.js is a Concrete Class
const Drinks = require('./Drinks');

class HouseBlend extends Drinks {
    constructor() {
        super("House blend");
    }

    // Implementing the abstract method
    cost() {
        return 250;
    }
}

module.exports = HouseBlend;
