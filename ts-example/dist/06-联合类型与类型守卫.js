"use strict";
// ============================================
// 06-联合类型与类型守卫.ts
// ============================================
// ── 联合类型 ──
function formatId(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    return `ID-${id}`;
}
console.log(formatId("abc")); // "ABC"
console.log(formatId(123)); // "ID-123"
function isFish(pet) {
    return pet.swim !== undefined;
}
function move(pet) {
    if (isFish(pet)) {
        pet.swim(); // TypeScript 知道这是 Fish
    }
    else {
        pet.fly(); // TypeScript 知道这是 Bird
    }
}
const fish = { name: "Nemo", swim: () => console.log("Swimming...") };
const bird = { name: "Eagle", fly: () => console.log("Flying...") };
move(fish);
move(bird);
function moveDirection(dir) {
    console.log(`Moving ${dir}`);
}
moveDirection("up");
// // moveDirection("forward"); // 错误！
// ── typeof 类型守卫 ──
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + value;
    }
    return padding + value;
}
console.log(padLeft("Hello", 4)); // "    Hello"
console.log(padLeft("Hello", ">>>")); // ">>>Hello"
function area2(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        default:
            throw new Error("Unknown shape");
    }
}
console.log("Circle area:", area2({ kind: "circle", radius: 5 }).toFixed(2));
console.log("Square area:", area2({ kind: "square", side: 4 }));
function handleResult(result) {
    if (result.status === "success") {
        console.log("Success:", result.data);
    }
    else {
        console.log("Error:", result.error.message);
    }
}
handleResult({ status: "success", data: "All good!" });
handleResult({ status: "failure", error: new Error("Something went wrong") });
console.log("\n✅ 06-联合类型与类型守卫.ts 运行完成");
//# sourceMappingURL=06-%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E4%B8%8E%E7%B1%BB%E5%9E%8B%E5%AE%88%E5%8D%AB.js.map