class TextGenerator {
  public generate(): string {
    return "some random text";
  }
}

class TextArrayGenerator {
  public specificRequest(): string[] {
    return ["some", "random", "text"];
  }
}

class Adapter extends TextGenerator {
  private adaptee: TextArrayGenerator;

  constructor(adaptee: TextArrayGenerator) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().join(" ");
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

function clientCode(generator: TextGenerator) {
  console.log(generator.generate());
}

const regularGenerator = new TextGenerator();
clientCode(regularGenerator);

const specialGenerator = new TextArrayGenerator();

console.log(`specialGenerator: ${specialGenerator.specificRequest()}`);


const adapter = new Adapter(specialGenerator);
clientCode(adapter);
