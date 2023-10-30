interface ComputerBuilder {
  assemblyDetails(): void;
  setupOS(): void;
  wrapUp(): void;
}

class IMacBuilder implements ComputerBuilder {
  private comp: IMac;
  constructor() {
    this.reset();
  }

  public reset(): void {
    this.comp = new IMac();
  }

  public assemblyDetails(): void {
    this.comp.details = "Mac details";
  }

  public setupOS(): void {
    this.comp.OS = "MacOS";
  }

  public wrapUp(): void {
    this.comp.wrapped = true;
  }

  public getProduct(): IMac {
    const result = this.comp;
    this.reset();
    return result;
  }
}

class IMac {
  public details: string = '';
  public OS: string = '';
  public wrapped: boolean = false;

  public start(): void {
    console.log(`Computer started OS:${this.OS}`);
  }
}

class Director {
  private builder: ComputerBuilder;

  public setBuilder(builder: ComputerBuilder): void {
    this.builder = builder;
  }

  public buildMinimalViableComputer(): void {
    this.builder.assemblyDetails();
    this.builder.setupOS();
  }

  public buildFullFeaturedComputer(): void {
    this.builder.assemblyDetails();
    this.builder.setupOS();
    this.builder.wrapUp();
  }
}

(function (director: Director) {
  const builder = new IMacBuilder();
  director.setBuilder(builder);

  director.buildMinimalViableComputer();
  builder.getProduct().start();

  director.buildFullFeaturedComputer();
  builder.getProduct().start();
})(new Director());
