"use strict";
// ============================================
// 05-泛型.ts
// ============================================
// ── 泛型函数 ──
function identity(arg) {
    return arg;
}
console.log(identity("hello"));
console.log(identity(42));
// 简写：类型推论
const result = identity("TypeScript");
console.log(result.toUpperCase());
const userResponse = {
    code: 200,
    message: "success",
    data: { id: 1, name: "Alice" },
};
const productResponse = {
    code: 200,
    message: "success",
    data: [
        { id: 1, title: "Phone", price: 999 },
        { id: 2, title: "Laptop", price: 1999 },
    ],
};
console.log("User:", userResponse.data.name);
console.log("Products:", productResponse.data.map((p) => p.title));
function logLength(arg) {
    console.log(`Length: ${arg.length}`);
    return arg;
}
logLength("hello"); // string 有 length
logLength([1, 2, 3]); // array 有 length
logLength({ length: 10 }); // 对象有 length
// logLength(123);         // 错误！number 没有 length
// ── 泛型类 ──
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    get size() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack size:", stack.size);
console.log("Pop:", stack.pop());
console.log("Peek:", stack.peek());
// ── keyof 约束 ──
function getProperty(obj, key) {
    return obj[key];
}
const personObj = { name: "Alice", age: 30, city: "Beijing" };
console.log(getProperty(personObj, "name")); // "Alice"
console.log(getProperty(personObj, "age")); // 30
// getProperty(person, "email"); // 错误！"email" 不是 person 的 key
console.log("\n✅ 05-泛型.ts 运行完成");
//# sourceMappingURL=05-%E6%B3%9B%E5%9E%8B.js.map