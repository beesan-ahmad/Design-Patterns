const Chef = require('./Chef');
const Order = require('./Order');
const Waiter = require('./Waiter');

class BehavioralPatternTesting{
    static TestingBehavioralPattern(){
        const chef = new Chef();
        let order = new Order(chef, 'Pasta');
        let waiter = new Waiter(order);
        waiter.execute();

        order = new Order(chef, 'Cake');
		waiter = new Waiter(order);
		waiter.execute();

    }

}
//BehavioralPatternTesting.TestingBehavioralPattern();
module.exports = BehavioralPatternTesting;