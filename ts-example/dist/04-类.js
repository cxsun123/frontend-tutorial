"use strict";
// ============================================
// 04-类.ts
// ============================================
// ── 基础类 ──
class Animal {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0)
            throw new Error("Age cannot be negative");
        this._age = value;
    }
    speak() {
        return `${name} makes a sound`;
    }
    toString() {
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
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    speak() {
        return `${this.name} barks! Woof!`;
    }
    fetch(item) {
        return `${this.name} fetches the ${item}`;
    }
}
const dog = new Dog("Buddy", 4, "Golden Retriever");
console.log(dog.speak());
console.log(dog.fetch("ball"));
// ── 抽象类 ──
class Shape {
    describe() {
        return `Area: ${this.area().toFixed(2)}, Perimeter: ${this.perimeter().toFixed(2)}`;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
const rect = new Rectangle(4, 6);
console.log("Circle:", circle.describe());
console.log("Rectangle:", rect.describe());
class Doc {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    print() {
        console.log(`📄 ${this.title}\n${this.content}`);
    }
}
const doc = new Doc("报告", "TypeScript 很好用！");
doc.print();
console.log("\n✅ 04-类.ts 运行完成");
//# sourceMappingURL=04-%E7%B1%BB.js.map