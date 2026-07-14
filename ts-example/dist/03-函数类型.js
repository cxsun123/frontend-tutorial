"use strict";
// ============================================
// 03-函数类型.ts
// ============================================
// ── 函数参数与返回值类型 ──
function add(a, b) {
    return a + b;
}
console.log("add(2, 3) =", add(2, 3));
// ── 可选参数 ──
function greet(name, title) {
    return title ? `Hello, ${title} ${name}!` : `Hello, ${name}!`;
}
console.log(greet("Alice"));
console.log(greet("Alice", "Dr."));
// ── 默认参数 ──
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
console.log("power(3) =", power(3)); // 9
console.log("power(3,3) =", power(3, 3)); // 27
// ── 剩余参数 ──
function sum(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}
console.log("sum(1,2,3,4) =", sum(1, 2, 3, 4));
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
console.log("multiply(4, 5) =", multiply(4, 5));
console.log("divide(10, 2) =", divide(10, 2));
function format(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toFixed(2);
}
console.log(format("hello")); // "HELLO"
console.log(format(3.14159)); // "3.14"
// ── 回调函数类型 ──
function fetchData(url, callback) {
    // 模拟异步操作
    callback(`Data from ${url}`);
}
fetchData("https://api.example.com", (data) => {
    console.log("Received:", data);
});
console.log("\n✅ 03-函数类型.ts 运行完成");
//# sourceMappingURL=03-%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B.js.map