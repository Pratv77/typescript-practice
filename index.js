"use strict";
// Basic Types
let age = 25;
let hobby = "soccer";
let isAdult = true;
let fruit = "apple";
// Arrays
let fruits = ["Apple", "Orange", "Banana"];
let arr = [22, "a", true];
let numArr = [[1], [2]];
// Tuples
let employee = [1, "Jack"];
let employees = [
    [2, "sarah"],
    [3, "jack"]
];
// Objects
let person = {
    name: "Prat",
    age: 21
};
let person1 = {
    name: "Elon",
    age: 51
};
let newPerson = {
    name: "Mike",
    age: 56
};
// Union
let x = 22; //can be number or string
let pratsOccupation = "student"; //value can only be "employed" or "student"
// Type Assertion
let y = "a";
y = 22;
// Functions
function add(x, y) {
    return x + y;
}
function sayHi() {
    console.log("Hi");
}
// Generics
function copyArr(arr) {
    return [...arr];
}
let numCopy = copyArr([1, 2, 3]);
let strCopy = copyArr(["1", "2", "3"]);
// Enums
var EyeColour;
(function (EyeColour) {
    EyeColour["brown"] = "common eye colour";
    EyeColour["blue"] = "rare eye colour";
    EyeColour["green"] = "very rare eye colour";
})(EyeColour || (EyeColour = {}));
function displayStudent(student) {
    const info = student.name + "\n" + student.age + "\n" + student.eyeColour;
    document.body.innerText = info;
}
displayStudent({
    name: "Pratham",
    age: 21,
    eyeColour: EyeColour.brown
});
