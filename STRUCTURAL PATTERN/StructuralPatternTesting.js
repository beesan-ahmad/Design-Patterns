// StructuralPatternTesting.js
const HouseBlend = require('./HouseBlend');
const DarkRoast = require('./DarkRoast');  
const Milk = require('./Milk');
const Sugar = require('./Sugar');

class StructuralPatternTesting {
    static TestingStructuralPattern() {
        const houseBlend = new HouseBlend();
        console.log(houseBlend.getDescription() + ": " + houseBlend.cost());

        const milkAddOnHouseBlend = new Milk(houseBlend);
        console.log(milkAddOnHouseBlend.getDescription() + ": " + milkAddOnHouseBlend.cost());

        const sugarAddOnHouseBlend  = new Sugar(milkAddOnHouseBlend);
        console.log(sugarAddOnHouseBlend .getDescription() + ": " + sugarAddOnHouseBlend .cost());

        const darkRoast = new DarkRoast();
        console.log(darkRoast.getDescription() + ": " + darkRoast.cost());

        const  milkAddOnDarkRoast = new Milk(darkRoast);
        console.log( milkAddOnDarkRoast.getDescription() + ": " +  milkAddOnDarkRoast.cost());

        const sugarAddOnDarkRoast = new Sugar( milkAddOnDarkRoast);
        console.log(sugarAddOnDarkRoast.getDescription() + ": " + sugarAddOnDarkRoast.cost());
    }
}

module.exports = StructuralPatternTesting;
