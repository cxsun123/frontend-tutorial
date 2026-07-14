"use strict";
// ============================================
// 02-接口与类型别名.ts
// ============================================
function createUser(name, email) {
    return {
        id: Math.floor(Math.random() * 1000),
        name,
        email,
        createdAt: new Date(),
    };
}
const user1 = createUser("Alice", "alice@example.com");
console.log("User:", user1);
const emp = {
    id: 1,
    name: "Bob",
    email: "bob@example.com",
    createdAt: new Date(),
    department: "Engineering",
    salary: 100000,
};
console.log("Employee:", emp);
const point = { x: 10, y: 20 };
const userId = 123;
const userStatus = "active";
console.log("Point:", point);
console.log("ID:", userId);
console.log("Status:", userStatus);
console.log("\n✅ 02-接口与类型别名.ts 运行完成");
//# sourceMappingURL=02-%E6%8E%A5%E5%8F%A3%E4%B8%8E%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D.js.map