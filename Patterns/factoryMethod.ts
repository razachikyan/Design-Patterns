abstract class CarCreator {
  public abstract createCar(): Car;

  public someOperation(): string {
    const car = this.createCar();
    return car.startEngine();
  }
}

class BmwCreator extends CarCreator {
  public createCar(): Car {
    return new BMW();
  }
}

class MercedesCreator extends CarCreator {
  public createCar(): Car {
    return new Mercedes();
  }
}

interface Car {
  startEngine(): string;
}

class BMW implements Car {
  public startEngine(): string {
    return "BMW engine started";
  }
}

class Mercedes implements Car {
  public startEngine(): string {
    return "Mercedes engine started";
  }
}

(function (creator: CarCreator) {
  console.log(creator.someOperation());
})(new BmwCreator());

(function (creator: CarCreator) {
  console.log(creator.someOperation());
})(new MercedesCreator());
