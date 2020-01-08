abstract class Car {
  public description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

class ModelS extends Car {
  public description = "Model S";

  public cost(): number {
    return 73000;
  }
}

class ModelX extends Car {
  public description = "Model X";

  public cost(): number {
    return 77000;
  }
}

abstract class CarOptions extends Car {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public abstract getDescription(): string;
  public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions {
  public getDescription(): string {
    return this.decoratedCar.getDescription() + " with enhanced autopilot";
  }
  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

class RearFacingSeats extends CarOptions {
  public getDescription(): string {
    return this.decoratedCar.getDescription() + " with rear-facing seats";
  }
  public cost(): number {
    return this.decoratedCar.cost() + 7000;
  }
}

let myTesla = new ModelX();
myTesla = new RearFacingSeats(myTesla);
myTesla = new EnhancedAutoPilot(myTesla);

console.log(myTesla.cost());
console.log(myTesla.getDescription());
