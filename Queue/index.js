const Queue =require('./queue');
const cars =new Queue();

cars.enQueue('Honda')
cars.enQueue('Toyoto ')
cars.enQueue('Tesla')
cars.enQueue('Mazda')
cars.deQueue()

console.log(cars)

console.log(cars.peek())
console.log(cars.getSize())
console.log(cars.isEmpty())

