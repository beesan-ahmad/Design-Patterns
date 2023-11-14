// AddOn.js this class acts as a decorator, also extending the Drinks class. 
const Drinks = require('./Drinks');

class AddOn extends Drinks {
    constructor(description, drink) {
        super(description);
        this.drink = drink;
    }

    // Abstract method - to be implemented by subclasses
    getDescription() {
        throw new Error("Abstract method 'getDescription' must be implemented by subclasses");
    }
}

module.exports = AddOn;
