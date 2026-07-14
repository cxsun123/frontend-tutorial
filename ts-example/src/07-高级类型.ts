// ============================================
// 07-高级类型.ts
// ============================================

// ── 交叉类型 (Intersection) ──
type HasName = { name: string };
type HasAge = { age: number };
type Person2 = HasName & HasAge;

const personData: Person2 = { name: "Alice", age: 30 };
console.log("Person:", personData);

// ── 映射类型 (Mapped Types) ──
type Readonly2<T> = {
  readonly [K in keyof T]: T[K];
};

type Partial2<T> = {
  [K in keyof T]?: T[K];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type ReadonlyTodo = Readonly2<Todo>;
type PartialTodo = Partial2<Todo>;

const todo: ReadonlyTodo = {
  title: "Learn TypeScript",
  description: "Complete the tutorial",
  completed: false,
};
// todo.title = "New title"; // 错误！readonly

// ── 条件类型 (Conditional Types) ──
type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<string>;  // "yes"
type B = IsString<number>;  // "no"

// ── 内置工具类型 ──
interface UserProfile {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Pick: 选取部分属性
type UserBasic = Pick<UserProfile, "id" | "name">;
const userBasic: UserBasic = { id: 1, name: "Alice" };

// Omit: 排除部分属性
type UserWithoutEmail = Omit<UserProfile, "email">;
const userNoEmail: UserWithoutEmail = { id: 1, name: "Bob", age: 25 };

// Record: 构造键值对类型
type Roles = "admin" | "user" | "guest";
type RolePermissions = Record<Roles, string[]>;
const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"],
};
console.log("Admin permissions:", permissions.admin);

// ── 模板字面量类型 ──
type EventName = "click" | "focus" | "blur";
type HandlerName = `on${Capitalize<EventName>}`;
// HandlerName = "onClick" | "onFocus" | "onBlur"

// ── infer 关键字 ──
type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : any;
type Fn = () => string;
type Result2 = ReturnType2<Fn>; // string

// ── 实际应用：API 类型安全 ──
interface ApiEndpoints {
  "/users": { method: "GET"; response: UserProfile[] };
  "/users/:id": { method: "GET"; response: UserProfile };
  "/posts": { method: "POST"; response: { id: number; title: string } };
}

type GetResponse<T extends keyof ApiEndpoints> =
  ApiEndpoints[T] extends { response: infer R } ? R : never;

type UsersResponse = GetResponse<"/users">; // UserProfile[]
type PostResponse = GetResponse<"/posts">;  // { id: number; title: string }

console.log("UserBasic:", userBasic);
console.log("UserWithoutEmail:", userNoEmail);

console.log("\n✅ 07-高级类型.ts 运行完成");
