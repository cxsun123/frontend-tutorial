// ============================================
// 02-接口与类型别名.ts
// ============================================

// ── 接口 (Interface) ──
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;          // 可选属性
  readonly createdAt: Date; // 只读属性
}

function createUser(name: string, email: string): User {
  return {
    id: Math.floor(Math.random() * 1000),
    name,
    email,
    createdAt: new Date(),
  };
}

const user1 = createUser("Alice", "alice@example.com");
console.log("User:", user1);

// user1.createdAt = new Date(); // 错误！readonly 属性不可修改

// ── 接口继承 ──
interface Employee extends User {
  department: string;
  salary: number;
}

const emp: Employee = {
  id: 1,
  name: "Bob",
  email: "bob@example.com",
  createdAt: new Date(),
  department: "Engineering",
  salary: 100000,
};
console.log("Employee:", emp);

// ── 类型别名 (Type Alias) ──
type Point = {
  x: number;
  y: number;
};

type ID = string | number;

type Status = "active" | "inactive" | "pending";

const point: Point = { x: 10, y: 20 };
const userId: ID = 123;
const userStatus: Status = "active";

console.log("Point:", point);
console.log("ID:", userId);
console.log("Status:", userStatus);

// ── Interface vs Type ──
// Interface: 可以 extends 继承，可以声明合并
// Type:      可以用 union (|)、交叉 (&)、映射类型

type StringOrNumber = string | number;
type Named = { name: string };
type NamedStringOrNumber = Named & StringOrNumber; // 交叉类型

console.log("\n✅ 02-接口与类型别名.ts 运行完成");
