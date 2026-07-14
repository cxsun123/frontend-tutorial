// ============================================
// 05-泛型.ts
// ============================================

// ── 泛型函数 ──
function identity<T>(arg: T): T {
  return arg;
}
console.log(identity<string>("hello"));
console.log(identity<number>(42));

// 简写：类型推论
const result = identity("TypeScript");
console.log(result.toUpperCase());

// ── 泛型接口 ──
interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  code: 200,
  message: "success",
  data: { id: 1, name: "Alice" },
};

const productResponse: ApiResponse<Product[]> = {
  code: 200,
  message: "success",
  data: [
    { id: 1, title: "Phone", price: 999 },
    { id: 2, title: "Laptop", price: 1999 },
  ],
};

console.log("User:", (userResponse.data as any).name);
console.log("Products:", productResponse.data.map((p) => p.title));

// ── 泛型约束 ──
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(`Length: ${arg.length}`);
  return arg;
}

logLength("hello");        // string 有 length
logLength([1, 2, 3]);      // array 有 length
logLength({ length: 10 }); // 对象有 length
// logLength(123);         // 错误！number 没有 length

// ── 泛型类 ──
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack size:", stack.size);
console.log("Pop:", stack.pop());
console.log("Peek:", stack.peek());

// ── keyof 约束 ──
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const personObj = { name: "Alice", age: 30, city: "Beijing" };
console.log(getProperty(personObj, "name")); // "Alice"
console.log(getProperty(personObj, "age"));  // 30
// getProperty(person, "email"); // 错误！"email" 不是 person 的 key

console.log("\n✅ 05-泛型.ts 运行完成");
