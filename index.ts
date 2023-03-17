// Basic Types
let age: number = 25
let hobby: string = "soccer"
let isAdult: boolean = true
let fruit: any = "apple"

// Arrays
let fruits: string[] = ["Apple", "Orange", "Banana"]
let arr: any[] = [22, "a", true]
let numArr: number[][] = [[1], [2]]

// Tuples
let employee: [number, string] = [1, "Jack"]
let employees: [number, string][] = [ 
  [2, "sarah"],
  [3, "jack"]
]

// Objects
let person: {
  name: string,
  age: number
} = {
  name: "Prat",
  age: 21
}

// Custom Types
type Person = {
  name: string,
  age: number
}

let person1: Person = {
  name: "Elon",
  age: 51
}

// Interface
interface Person1 {
  name: string,
  age: number
}

let newPerson: Person1 = {
  name: "Mike",
  age: 56
}

// Union
let x: string | number = 22 //can be number or string

type occupation = "employed" | "student"
let pratsOccupation: occupation = "student" //value can only be "employed" or "student"

// Type Assertion
let y: any = "a"
y = <number> 22

// Functions
function add(x: number, y: number): number {
  return x + y
}

function sayHi(): void {  //void means it doesn't return anything
  console.log("Hi")
}

// Generics
function copyArr<T>(arr: T[]): T[] {
  return[...arr]
}

let numCopy = copyArr<number>([1,2,3])
let strCopy = copyArr<string>(["1","2","3"])

// Enums
enum EyeColour {
  brown = "common eye colour",
  blue = "rare eye colour",
  green = "very rare eye colour"
}

interface Student{
  name: string,
  age?: number,    // use ? to make the attribute optional
  eyeColour: EyeColour
}

function displayStudent(student: Student): void{
  const info: string = student.name + "\n" + student.age + "\n" + student.eyeColour
  document.body.innerText = info
}

displayStudent({
  name: "Pratham",
  age: 21,
  eyeColour: EyeColour.brown
})

function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

interface Person3 {
  name: string;
  age: number;
  address: string;
}

const people: Person3[] = [
  { name: 'John', age: 25, address: '123 Main St.' },
  { name: 'Jane', age: 30, address: '456 Maple Ave.' },
  { name: 'Bob', age: 35, address: '789 Oak St.' }
];

class Rectangle {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.getArea());

function findMax(nums: number[]): number | null {
  if (nums.length === 0) {
    return null;
  }

  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}

console.log(findMax([3, 5, 2, 8, 1])); // Output: 8
console.log(findMax([]));

function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]
console.log(reverseArray(['a', 'b', 'c']));


interface Person4 {
  name: string;
  age: number;
  address: string;
}


let person4: Person4 = {
  name: "Alice",
  age: 25,
  address: "123 Main St."
};


class Animal {
  name: string;
  type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }
}


let cat: Animal = new Animal("Fluffy", "cat");

type KeyAndValue<T extends string, U> = {
  [K in T]: K & U;
};

type ExampleType = KeyAndValue<'foo', number>;


function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("hello");
console.log(output); 

// Union type example
type stringOrNumber = string | number;

function printValue(val: stringOrNumber) {
  console.log(`The value is ${val}`);
}

printValue("hello"); 
printValue(42);