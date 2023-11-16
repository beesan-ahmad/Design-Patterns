const Command = require ('./Command');
class Order extends Command {
constructor(chef,food){
    super();
this.chef = chef;
this.food = food;
}
execute() {
    if (this.food ==='pasta') {
        this.chef.cookPasta();
    } else {
        this.chef.bakeCake();
    }
}

}
module.export = Order;