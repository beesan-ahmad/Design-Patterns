class privateSingleton {
    constructor() {
        this.message = "I am an instance"; // initialize an attribute message
    }
}

class Singleton {
    constructor() {
        throw new Error('Use Singleton.getAnInstance() method'); // throw an error that we cannot directly create an object from the singleton class
    }

    static getAnInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new privateSingleton(); // create an object of private singleton class
        }
        return Singleton.instance;
    }
}

module.exports = Singleton;
