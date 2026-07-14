declare function formatId(id: string | number): string;
type Fish = {
    swim: () => void;
    name: string;
};
type Bird = {
    fly: () => void;
    name: string;
};
declare function isFish(pet: Fish | Bird): pet is Fish;
declare function move(pet: Fish | Bird): void;
declare const fish: Fish;
declare const bird: Bird;
type MoveDirection = "up" | "down" | "left" | "right";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
declare function moveDirection(dir: MoveDirection): void;
declare function padLeft(value: string, padding: string | number): string;
interface CircleShape {
    kind: "circle";
    radius: number;
}
interface SquareShape {
    kind: "square";
    side: number;
}
type Shape2 = CircleShape | SquareShape;
declare function area2(shape: Shape2): number;
interface Success {
    status: "success";
    data: string;
}
interface Failure {
    status: "failure";
    error: Error;
}
type Result = Success | Failure;
declare function handleResult(result: Result): void;
