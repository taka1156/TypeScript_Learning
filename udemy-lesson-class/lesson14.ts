class Vehicle {
  private name: string = '';
  private fuel: number = 0;
  private economy: number = 0; //　燃費
  private readonly capacity: number = 0; // 定員
  constructor(name: string, fuel: number, economy: number, capacity: number) {
    this.name = name;
    this.fuel = fuel;
    this.economy = economy;
    this.capacity = capacity;
  }

  protected run(distance: number): void {
    this.fuel = Math.floor((this.fuel - distance / this.economy) * 100) / 100;
  }

  protected info(): void {
    console.log(`==== name:${this.name} ====`);
    console.log(`fuel:${this.fuel}`);
    console.log(`capacity:${this.capacity}`);
  }

  protected logStatus(status: string): void {
    console.log(`\n==== name:${this.name} ====`);
    console.log(`* status: [${status}] *`);
    console.log('\n');
  }
}

class Car extends Vehicle {
  private gear: 'P' | 'R' | 'N' | 'D' | 'L' = 'P';

  public drive(distance: number): void {
    this.gear = 'D';
    super.logStatus('driving');
    super.run(distance);
  }

  public stop(): void {
    this.gear = 'P';
    super.logStatus('parking');
  }

  public info(): void {
    super.info();
    console.log(`gear:${this.gear}`);
  }
}

class Motorcycle extends Vehicle {
  constructor(name: string, fuel: number, economy: number) {
    const capacity = 1;
    super(name, fuel, economy, capacity);
  }

  public run(distance: number): void {
    super.run(distance);
  }

  public info(): void {
    super.info();
  }
}

let takaCar = new Car("taka's Car", 30, 20, 4);
let takaMotorcycle = new Motorcycle("taka's Motorcycle",  5, 30);

console.log('=== result: クラス(継承、protected)===');
// 数字はテキトー
console.log('\n*** Car ***');
takaCar.info();
takaCar.drive(35);
takaCar.info();
takaCar.stop();
takaCar.info();
takaCar.drive(85);
takaCar.info();
takaCar.stop();
takaCar.info();

console.log('\n*** Motorcycle ***');
takaMotorcycle.info();
takaMotorcycle.run(35);
takaMotorcycle.info();
takaMotorcycle.run(85);
takaMotorcycle.info();
