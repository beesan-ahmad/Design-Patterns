const Singleton = require('./Singleton');
const StructuralPatternTesting = require('./STRUCTURAL PATTERN/StructuralPatternTesting');
const BehavioralPatternTesting = require('./BEHAVIORAL PATTERN/BehavioralPatternTesting');
console.log("***************************************");
console.log("Implementing Creational Design Pattern: By Singleton Pattern");
try {
    // Trying to create an instance directly, which should throw an error
    const directInstance = new Singleton();
} catch (error) {
    console.error("Caught an error: ", error.message);
}
//singleton instance
try {
    const obj = Singleton.getAnInstance();//creates an instance of the privateSingleton class and logs its initial message.
    console.log(obj.message);
    obj.message = 'hi';//modifies the message property of the existing instance.
    const instance = Singleton.getAnInstance();//retrieves the existing instance
    console.log(instance.message);
} catch (error) {
    console.error(error.message);
}
// execute structural pattern (decorator pattern) by calling the TestingStructuralPattern() method
console.log("***************************************");
console.log("Implementing Structural Design Pattern: By Decorator Pattern");
StructuralPatternTesting.TestingStructuralPattern();

// execute behavioral pattern (command pattern) by calling the TestingBehavioralPattern() method
console.log("***************************************");
console.log("Implementing Behavioral Design Pattern: By Command Pattern");
BehavioralPatternTesting.TestingBehavioralPattern();