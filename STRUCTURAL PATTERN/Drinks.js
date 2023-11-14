class Drinks {
    constructor(description) {
        this.description = description;
    }
    getDescription() {
        return this.description;
    }
    // Abstract method - to be implemented by subclasses
    cost() {
        throw new Error("Abstract method 'cost' must be implemented by subclasses");
    }
}
module.exports = Drinks;