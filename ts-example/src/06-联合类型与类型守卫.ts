// ============================================
// 06-联合类型与类型守卫.ts
// ============================================

// ── 联合类型 ──
function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return `ID-${id}`;
}

console.log(formatId("abc"));  // "ABC"
console.log(formatId(123));    // "ID-123"

// ── 类型守卫 (Type Guard) ──
type Fish = { swim: () => void; name: string };
type Bird = { fly: () => void; name: string };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird): void {
  if (isFish(pet)) {
    pet.swim();  // TypeScript 知道这是 Fish
  } else {
    pet.fly();   // TypeScript 知道这是 Bird
  }
}

const fish: Fish = { name: "Nemo", swim: () => console.log("Swimming...") };
const bird: Bird = { name: "Eagle", fly: () => console.log("Flying...") };
move(fish);
move(bird);

// ── 字面量类型 ──
type MoveDirection = "up" | "down" | "left" | "right";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

function moveDirection(dir: MoveDirection): void {
  console.log(`Moving ${dir}`);
}
moveDirection("up");
// // moveDirection("forward"); // 错误！

// ── typeof 类型守卫 ──
function padLeft(value: string, padding: string | number): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + value;
  }
  return padding + value;
}
console.log(padLeft("Hello", 4));      // "    Hello"
console.log(padLeft("Hello", ">>>"));  // ">>>Hello"

// ── in 类型守卫 ──
interface CircleShape { kind: "circle"; radius: number }
interface SquareShape { kind: "square"; side: number }

type Shape2 = CircleShape | SquareShape;

function area2(shape: Shape2): number {
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

// ── 可辨识联合 (Discriminated Union) ──
interface Success {
  status: "success";
  data: string;
}

interface Failure {
  status: "failure";
  error: Error;
}

type Result = Success | Failure;

function handleResult(result: Result): void {
  if (result.status === "success") {
    console.log("Success:", result.data);
  } else {
    console.log("Error:", result.error.message);
  }
}

handleResult({ status: "success", data: "All good!" });
handleResult({ status: "failure", error: new Error("Something went wrong") });

console.log("\n✅ 06-联合类型与类型守卫.ts 运行完成");
