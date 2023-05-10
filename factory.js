/** 
 * How to implement factory
 * 
 * 1. Declare base product class/interface, this will be returned by
 *    factory class and their sub classes
 * 2. Implement concrete products sub classes that inherits/implements
 *    the base product class/interface
 * 3. Declare factory class/interface that returns objects that match the base product, 
 *    not the concrete products in their factory methods
*/


/** STEP 1 */
class BaseCar{
    showCost(){
        throw new Error("Method not implemented! ")
    }
}

/** STEP 2 */
class FordCar extends BaseCar{
    showCost(){
        console.log("FordCar cost: $5'2000.000")
    }
}

class MazdaCar extends BaseCar{
    showCost(){
        console.log("MazdaCar cost: $100.000.000")
    }
}

/** STEP 3 */
class CarFactory{
    makeCar(){
        throw new Error("Method not implemented! ")
    }
}

/** STEP 4 */
class FordCarFactory extends CarFactory{
    makeCar(){
        return new FordCar();
    }
}

class MazdaCarFactory extends CarFactory{
    makeCar(){
        return new MazdaCar();
    }
}


function appFactory(factory){
    const car = factory.makeCar();

    car.showCost();
}

appFactory(new FordCarFactory())
appFactory(new MazdaCarFactory())


//create factories
function createFactory(type){
    const factories = {
        ford: FordCarFactory,
        mazda: MazdaCarFactory
    };

    const Factory = factories[type];
    return new Factory()
}

appFactory(createFactory('ford'))
appFactory(createFactory('mazda'))