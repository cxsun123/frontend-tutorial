declare class Animal {
    name: string;
    private _age;
    constructor(name: string, age: number);
    get age(): number;
    set age(value: number);
    speak(): string;
    toString(): string;
}
declare const cat: Animal;
declare class Dog extends Animal {
    breed: string;
    constructor(name: string, age: number, breed: string);
    speak(): string;
    fetch(item: string): string;
}
declare const dog: Dog;
declare abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;
    describe(): string;
}
declare class Circle extends Shape {
    private radius;
    constructor(radius: number);
    area(): number;
    perimeter(): number;
}
declare class Rectangle extends Shape {
    private width;
    private height;
    constructor(width: number, height: number);
    area(): number;
    perimeter(): number;
}
declare const circle: Circle;
declare const rect: Rectangle;
interface Printable {
    print(): void;
}
declare class Doc implements Printable {
    title: string;
    content: string;
    constructor(title: string, content: string);
    print(): void;
}
declare const doc: Doc;
