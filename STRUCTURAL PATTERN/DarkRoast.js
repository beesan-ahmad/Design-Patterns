// DarkRoast.js is a Concrete Class
const Drinks = require('./Drinks')
class DarkRoast extends Drinks {
    constructor() {
        super("Dark roast");
    }

    // Implementing the abstract method
    cost() {
        return 300;
    }
}

module.exports = DarkRoast;
