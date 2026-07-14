"use strict";
// ============================================
// 01-基本类型.ts — TypeScript 原始数据类型
// ============================================
// ── 字符串 ──
let greeting = "Hello, TypeScript!";
console.log(greeting);
// ── 数字 ──
let age = 25;
let price = 99.9;
console.log(`Age: ${age}, Price: ${price}`);
// ── 布尔值 ──
let isDone = false;
console.log(`Is done: ${isDone}`);
// ── null 和 undefined ──
let nothing = null;
let notDefined = undefined;
console.log(nothing, notDefined);
// ── 数组 ──
let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie"];
console.log(numbers, names);
// ── 元组 (Tuple) ──
let tuple = ["Alice", 30];
console.log(tuple);
// ── 枚举 (Enum) ──
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let dir = Direction.Up;
console.log(`Direction: ${Direction[dir]}`); // "Up"
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
let favoriteColor = Color.Red;
console.log(`Color: ${favoriteColor}`);
// ── 任意值 (any) ──
let anything = 42;
anything = "now a string";
anything = true;
console.log(anything);
// ── void ──
function sayHello() {
    console.log("Hello!");
}
sayHello();
// ── never ──
function throwError(msg) {
    throw new Error(msg);
}
// throwError("oops"); // 取消注释会抛出错误
console.log("\n✅ 01-基本类型.ts 运行完成");
//# sourceMappingURL=01-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.js.map