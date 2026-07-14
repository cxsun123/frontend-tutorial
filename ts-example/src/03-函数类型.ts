// ============================================
// 03-函数类型.ts
// ============================================

// ── 函数参数与返回值类型 ──
function add(a: number, b: number): number {
  return a + b;
}
console.log("add(2, 3) =", add(2, 3));

// ── 可选参数 ──
function greet(name: string, title?: string): string {
  return title ? `Hello, ${title} ${name}!` : `Hello, ${name}!`;
}
console.log(greet("Alice"));
console.log(greet("Alice", "Dr."));

// ── 默认参数 ──
function power(base: number, exponent: number = 2): number {
  return Math.pow(base, exponent);
}
console.log("power(3) =", power(3));     // 9
console.log("power(3,3) =", power(3, 3)); // 27

// ── 剩余参数 ──
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log("sum(1,2,3,4) =", sum(1, 2, 3, 4));

// ── 函数类型 ──
type MathOperation = (a: number, b: number) => number;

const multiply: MathOperation = (a, b) => a * b;
const divide: MathOperation = (a, b) => a / b;

console.log("multiply(4, 5) =", multiply(4, 5));
console.log("divide(10, 2) =", divide(10, 2));

// ── 函数重载 ──
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
console.log(format("hello"));  // "HELLO"
console.log(format(3.14159));  // "3.14"

// ── 回调函数类型 ──
function fetchData(url: string, callback: (data: string) => void): void {
  // 模拟异步操作
  callback(`Data from ${url}`);
}
fetchData("https://api.example.com", (data) => {
  console.log("Received:", data);
});

console.log("\n✅ 03-函数类型.ts 运行完成");
