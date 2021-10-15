"use strict"
function myCar(){
    const car = require('./my_car');
    car.drive();
    car.turn(40);
    car.break();
}
myCar();
