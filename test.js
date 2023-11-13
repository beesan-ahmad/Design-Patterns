const Singleton = require('./Singleton');

try {
    const obj = Singleton.getAnInstance();//creates an instance of the privateSingleton class and logs its initial message.
    console.log(obj.message);
    obj.message = 'hi';//modifies the message property of the existing instance.
    const instance = Singleton.getAnInstance();//retrieves the existing instance
    console.log(instance.message);
} catch (error) {
    console.error(error.message);
}
