"use strict";
// ============================================
// 07-高级类型.ts
// ============================================
const personData = { name: "Alice", age: 30 };
console.log("Person:", personData);
const todo = {
    title: "Learn TypeScript",
    description: "Complete the tutorial",
    completed: false,
};
const userBasic = { id: 1, name: "Alice" };
const userNoEmail = { id: 1, name: "Bob", age: 25 };
const permissions = {
    admin: ["read", "write", "delete"],
    user: ["read", "write"],
    guest: ["read"],
};
console.log("Admin permissions:", permissions.admin);
console.log("UserBasic:", userBasic);
console.log("UserWithoutEmail:", userNoEmail);
console.log("\n✅ 07-高级类型.ts 运行完成");
//# sourceMappingURL=07-%E9%AB%98%E7%BA%A7%E7%B1%BB%E5%9E%8B.js.map