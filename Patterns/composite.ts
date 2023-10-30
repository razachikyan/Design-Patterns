abstract class MenuComponent {
  abstract getName(): string;
  abstract getPrice(): number;
  abstract isVegetarian(): boolean;
  abstract print(): void;
}

class MenuItem extends MenuComponent {
  constructor(
    private name: string,
    private price: number,
    private vegetarian: boolean
  ) {
    super();
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  isVegetarian(): boolean {
    return this.vegetarian;
  }

  print(): void {
    console.log(
      `${this.name} - $${this.price} - ${this.vegetarian ? "Veg" : "Non-Veg"}`
    );
  }
}

class Menu extends MenuComponent {
  private menuComponents: MenuComponent[] = [];

  constructor(private name: string, private description: string) {
    super();
  }

  add(component: MenuComponent): void {
    this.menuComponents.push(component);
  }

  remove(component: MenuComponent): void {
    const index = this.menuComponents.indexOf(component);
    if (index !== -1) {
      this.menuComponents.splice(index, 1);
    }
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    throw new Error("Unsupported operation");
  }

  isVegetarian(): boolean {
    throw new Error("Unsupported operation");
  }

  print(): void {
    console.log(`\n${this.name}, ${this.description}`);
    console.log("---------------------");

    this.menuComponents.forEach((component) => {
      component.print();
    });
  }
}

// Example usage
const pancakeHouseMenu = new Menu("Pancake House Menu", "Breakfast Menu");
const dinerMenu = new Menu("Diner Menu", "Lunch Menu");
const dessertMenu = new Menu("Dessert Menu", "Dessert Menu");

pancakeHouseMenu.add(new MenuItem("Pancake", 2.99, false));
pancakeHouseMenu.add(new MenuItem("Waffle", 3.59, true));

dinerMenu.add(new MenuItem("Burger", 4.99, false));
dinerMenu.add(new MenuItem("Salad", 3.29, true));

dessertMenu.add(new MenuItem("Cake", 2.99, true));
dessertMenu.add(new MenuItem("Ice Cream", 1.99, true));

const allMenus = new Menu("All Menus", "All menus combined");
allMenus.add(pancakeHouseMenu);
allMenus.add(dinerMenu);
allMenus.add(dessertMenu);

// Display the menus
allMenus.print();
