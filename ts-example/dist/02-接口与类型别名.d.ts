interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
    readonly createdAt: Date;
}
declare function createUser(name: string, email: string): User;
declare const user1: User;
interface Employee extends User {
    department: string;
    salary: number;
}
declare const emp: Employee;
type Point = {
    x: number;
    y: number;
};
type ID = string | number;
type Status = "active" | "inactive" | "pending";
declare const point: Point;
declare const userId: ID;
declare const userStatus: Status;
type StringOrNumber = string | number;
type Named = {
    name: string;
};
type NamedStringOrNumber = Named & StringOrNumber;
