class privateSingleton{
    constructor(){
        this.message('I am an instance');//initialize an attribute message 
    }
}
export class Singleton{
    constructor(){
        throw new Error('use Singleton.getAnInstance()');//throw an error that we can not directly create an object from singleton class
    }
    static getAnInstance(){ // static method to call it by the name of the class
        if(!Singleton.instance){
            Singleton.instance = new privateSingleton();//create an object of private singleton class
        }else{
            return Singleton.instance;
        }
    }
}