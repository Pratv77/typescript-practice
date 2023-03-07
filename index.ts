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