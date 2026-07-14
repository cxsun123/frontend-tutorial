// ============================================
// 01-基本类型.ts — TypeScript 原始数据类型
// ============================================

// ── 字符串 ──
let greeting: string = "Hello, TypeScript!";
console.log(greeting);

// ── 数字 ──
let age: number = 25;
let price: number = 99.9;
console.log(`Age: ${age}, Price: ${price}`);

// ── 布尔值 ──
let isDone: boolean = false;
console.log(`Is done: ${isDone}`);

// ── null 和 undefined ──
let nothing: null = null;
let notDefined: undefined = undefined;
console.log(nothing, notDefined);

// ── 数组 ──
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];
console.log(numbers, names);

// ── 元组 (Tuple) ──
let tuple: [string, number] = ["Alice", 30];
console.log(tuple);

// ── 枚举 (Enum) ──
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
let dir: Direction = Direction.Up;
console.log(`Direction: ${Direction[dir]}`); // "Up"

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
let favoriteColor: Color = Color.Red;
console.log(`Color: ${favoriteColor}`);

// ── 任意值 (any) ──
let anything: any = 42;
anything = "now a string";
anything = true;
console.log(anything);

// ── void ──
function sayHello(): void {
  console.log("Hello!");
}
sayHello();

// ── never ──
function throwError(msg: string): never {
  throw new Error(msg);
}
// throwError("oops"); // 取消注释会抛出错误

console.log("\n✅ 01-基本类型.ts 运行完成");
