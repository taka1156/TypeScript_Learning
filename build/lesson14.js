"use strict";
class Vehicle {
    constructor(name, fuel, economy, capacity) {
        this.name = '';
        this.fuel = 0;
        this.economy = 0; //　燃費
        this.capacity = 0; // 定員
        this.name = name;
        this.fuel = fuel;
        this.economy = economy;
        this.capacity = capacity;
    }
    run(distance) {
        this.fuel = Math.floor((this.fuel - distance / this.economy) * 100) / 100;
    }
    info() {
        console.log(`==== name:${this.name} ====`);
        console.log(`fuel:${this.fuel}`);
        console.log(`capacity:${this.capacity}`);
    }
    logStatus(status) {
        console.log(`status: [${status}]`);
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.gear = 'P';
    }
    drive(distance) {
        this.gear = 'D';
        super.logStatus('driving');
        super.run(distance);
    }
    stop() {
        this.gear = 'P';
        super.logStatus('parking');
        this.info();
    }
    info() {
        super.info();
        console.log(`gear:${this.gear}`);
    }
}
class Motorcycle extends Vehicle {
    constructor(name, fuel, economy) {
        const capacity = 1;
        super(name, fuel, economy, capacity);
    }
    run(distance) {
        super.run(distance);
    }
    info() {
        super.info();
    }
}
let takaCar = new Car("taka's Car", 30, 20, 4);
let takaMotorcycle = new Motorcycle("taka's Motorcycle", 5, 30);
console.log('=== result: クラス(継承)===');
// 数字はテキトー
console.log('\n*** Car ***');
takaCar.info();
takaCar.drive(35);
takaCar.info();
takaCar.stop();
takaCar.drive(85);
takaCar.info();
takaCar.stop();
console.log('\n*** Motorcycle ***');
takaMotorcycle.info();
takaMotorcycle.run(35);
takaMotorcycle.info();
takaMotorcycle.run(85);
takaMotorcycle.info();
