interface Cloneable {
  clone(): Cloneable;
}

class ConcretePrototype implements Cloneable {
  private property1: string;
  private property2: number;

  constructor(property1: string, property2: number) {
    this.property1 = property1;
    this.property2 = property2;
  }

  clone(): ConcretePrototype {
    return new ConcretePrototype(this.property1, this.property2);
  }

  getProperty1(): string {
    return this.property1;
  }

  getProperty2(): number {
    return this.property2;
  }
}

// Client code
const prototype = new ConcretePrototype("Hello", 42);
const clone1 = prototype.clone();
const clone2 = prototype.clone();