const Command = require('./Command');
class Order extends Command {
constructor(chef,food){
    super();
this.chef = chef;
this.food = food;
}
execute() {
    if (this.food.toLowerCase() ==='pasta') {
        this.chef.cookPasta();
    } else {
        this.chef.bakeCake();
    }
}

}
module.exports = Order;