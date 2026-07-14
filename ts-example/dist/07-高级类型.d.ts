type HasName = {
    name: string;
};
type HasAge = {
    age: number;
};
type Person2 = HasName & HasAge;
declare const personData: Person2;
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
declare const todo: ReadonlyTodo;
type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<string>;
type B = IsString<number>;
interface UserProfile {
    id: number;
    name: string;
    email: string;
    age: number;
}
type UserBasic = Pick<UserProfile, "id" | "name">;
declare const userBasic: UserBasic;
type UserWithoutEmail = Omit<UserProfile, "email">;
declare const userNoEmail: UserWithoutEmail;
type Roles = "admin" | "user" | "guest";
type RolePermissions = Record<Roles, string[]>;
declare const permissions: RolePermissions;
type EventName = "click" | "focus" | "blur";
type HandlerName = `on${Capitalize<EventName>}`;
type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : any;
type Fn = () => string;
type Result2 = ReturnType2<Fn>;
interface ApiEndpoints {
    "/users": {
        method: "GET";
        response: UserProfile[];
    };
    "/users/:id": {
        method: "GET";
        response: UserProfile;
    };
    "/posts": {
        method: "POST";
        response: {
            id: number;
            title: string;
        };
    };
}
type GetResponse<T extends keyof ApiEndpoints> = ApiEndpoints[T] extends {
    response: infer R;
} ? R : never;
type UsersResponse = GetResponse<"/users">;
type PostResponse = GetResponse<"/posts">;
