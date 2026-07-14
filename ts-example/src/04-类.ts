// ============================================
// 04-类.ts
// ============================================

// ── 基础类 ──
class Animal {
  name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) throw new Error("Age cannot be negative");
    this._age = value;
  }

  speak(): string {
    return `${name} makes a sound`;
  }

  toString(): string {
    return `${this.name} (age: ${this._age})`;
  }
}

const cat = new Animal("Cat", 3);
console.log(cat.toString());
console.log("Cat age:", cat.age);
cat.age = 5;
console.log("Updated age:", cat.age);

// ── 继承 ──
class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  speak(): string {
    return `${this.name} barks! Woof!`;
  }

  fetch(item: string): string {
    return `${this.name} fetches the ${item}`;
  }
}

const dog = new Dog("Buddy", 4, "Golden Retriever");
console.log(dog.speak());
console.log(dog.fetch("ball"));

// ── 抽象类 ──
abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;

  describe(): string {
    return `Area: ${this.area().toFixed(2)}, Perimeter: ${this.perimeter().toFixed(2)}`;
  }
}

class Circle extends Shape {
  private radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(5);
const rect = new Rectangle(4, 6);
console.log("Circle:", circle.describe());
console.log("Rectangle:", rect.describe());

// ── 实现接口 ──
interface Printable {
  print(): void;
}

class Doc implements Printable {
  constructor(public title: string, public content: string) {}

  print(): void {
    console.log(`📄 ${this.title}\n${this.content}`);
  }
}

const doc = new Doc("报告", "TypeScript 很好用！");
doc.print();

console.log("\n✅ 04-类.ts 运行完成");
