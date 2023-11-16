class Waiter{
    constructor(order){
        this.order = order;
    }
    execute(){
        this.order.execute();
    }
}
module.exports = Waiter;