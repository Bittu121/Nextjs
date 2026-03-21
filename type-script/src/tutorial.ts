// let a:number;
// a = 96;
// a.toFixed()

// let b:string
// b=78  //error
// b="type script" //works
// b.concat()

// let isOnline:boolean
// isOnline=true

// let arr:number[];
// arr=[78]
// arr.filter(()=>{})

// let arr:string[];
// arr=["type script"]
// arr.concat()

// let arr: [number, string,boolean];  //tuple can not chnage immutable
// arr=[10,"num",false]  //allow make sure maintain order
// arr=[10,"num",false,20] ; // not allowed

// enum role {
//   "user",
//   "admin",
// }
// role.admin;

// let a:any   //Note- not used any in type script
// a=78
// a="java script"
// a=["ayush"]
// a=false

//other approach
// let a: number[] = [10, 20, 30];
// let b: Array<number>;
// let b: Array<string> = ["js", "TS"];
// let user: [string, number] = ["Aman", 22];

//=========function========
// function ayush(a: number, b: string): number {
//   return a;
// }
// ayush(78, "ayush");

// function ayush(a: number, b: string): void {
// }
// ayush(78, "ayush");

// function ayush(a: number, b: string) {}
// ayush(78, "ayush");

//=====Optional & Default parameter====
// function greet(name: string, prefix: string="Hi"):string {
//     return `$prefix{prefix},${name}`
// }
// greet("ayush");

// function ayush(a: number, b: string="Java script"):number{
//     return 45
// }
// ayush(78);

//====Type Declaration & Type Inference====
// let a =89;

//Type annotation
// let a: number;

//Type Alias
// type ayush = number | string | boolean;
// let a: ayush;
// a = 89;
// a = "ayush";
// a = false;

// type status = "success" | "error" | "pending";
// let b:status
// b="success"

// type user={
//     name:string,
//     age:number
// }

// let a:user

// a={
//    name:"ayush",
//    age:21
// }

// type post={
//     description:string,
//     image?:string
//     likes:number
// }

// let obj:post={
// description:"first post",
// likes:89
// }

// type A={
//     a:number
// }

// type B={
//     b:string
// }

// type MathFn=(a:number,b:number)=>number
// let add:MathFn=(a,b)=>{
// return a
// }

// interface post{
//     description:string,
//     image?:string
//     likes:number
// }

// let obj:post={
// description:"first post",
// likes:89
// }

// interface User {
//   id: number;
//   name: string;
//   email?: string; //optional
//   readonly role: string;
// }

// const u: User = {
//   id: 1,
//   name: "Aman",
//   role: "Admin",
// };

//Note difference b/w type and interface
//type used for both variable and object //doubt -> premitive,unions,functions
//interface used for only object

// type A = { a: number };
// type B = { b: number };

// type AB = A & B;

// interface X {
//   x: number;
// }
// interface Y extends X {
//   y: string;
// }

// interface A {
//     a: number
// }

// interface B extends A {
//     b: string
// }

// let obj: B = {
//     a: 90,
//     b: "ayush"
// }

// let a:user;

//Union
// type ApiResponse = "ok" | "fail" | "loading";
// let res: ApiResponse = "ok";

//Intersection
// type Person = { name: string };
// type Contact = { phone: string };
// type Full = Person & Contact;
// const user: Full = { name: "Aman", phone: "123" };

//Generics
// function identity<T>(value: T): T {
//   return value;
// }
// const n = identity(10);
// const s = identity("hello");

// function hello<T>(a: T, b: T): T {
//   return a;
// }
// // hello(12, 45);
// hello<number>(12, 45);

//Generic Interface
// interface Box<T> {
//   value: T;
// }
// const stringBox: Box<string> = { value: "Hi" };

// interface user<T> {
//   name: string;
//   age: T;
// }

// let ayush: user<number> = {
//   name: "ayush",
//   age: 21,
// };


//Global Declaration --> used in reactjs
//src/type.d.ts
declare global {
  interface Window {
    appVersion: string;
  }
  type ApiResponse<T> = {
    data: T;
    error?: string;
  };
}
export {};

//
declare global {
  type ayush = number | string;

  type user = {
    name: "string";
  };
}

export {};
