declare let greeting: string;
declare let age: number;
declare let price: number;
declare let isDone: boolean;
declare let nothing: null;
declare let notDefined: undefined;
declare let numbers: number[];
declare let names: Array<string>;
declare let tuple: [string, number];
declare enum Direction {
    Up = 0,
    Down = 1,
    Left = 2,
    Right = 3
}
declare let dir: Direction;
declare enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
declare let favoriteColor: Color;
declare let anything: any;
declare function sayHello(): void;
declare function throwError(msg: string): never;
