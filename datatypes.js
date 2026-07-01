// 1. Check data type
// input: 10 → output: "number"
let intput = 10;
console.log(typeof intput);

// String length without .length
// input: "hello" → output: 5
var str = "Hello";
let count = 0;

[...str].forEach(() => count++);

console.log(count); // 5
console.log([...str])

// Boolean toggle
// Write a function that flips true ↔ false
// input: true → output: false
let flip = (val) => {
    return !val;
}
console.log(flip(true))

// Check if value is undefined or null
// Return "empty" if null or undefined, else "valid"
let test = null;
console.log("Test is:" , (test === undefined || test === null) ? "-" : "Valid");
// console.log("Test is:" + (test === undefined || test === null) ? "-" : "Valid"); // Guess output V

// Number to string
// Convert number to string without using String()
// input: 123 → "123"
let num = 123;
let s  = num + "";

console.log(s); // "123"

let nums = 123;
let strs = nums.toString();

console.log(strs); // "123"

// 🟡 Intermediate Level
// Check if value is truthy or falsy
// Return "truthy" or "falsy"
// test with: "", 0, "hello", null
const checkTruthy = (val) => {
    return val ? "truthy" : "falsy";
};
console.log(checkTruthy(""));      // falsy
console.log(checkTruthy(0));       // falsy
console.log(checkTruthy("hello")); // truthy
console.log(checkTruthy(null));    // falsy

// Type-safe addition
// If both inputs are numbers → add
// else → return "Invalid input"
const onlyNumber = (val) => {
    if (typeof val === "number") {
        return "Valid number";
    }
    return "Invalid input";
};
console.log(onlyNumber(23));

// 🔴 Advanced Level
// Custom typeof function
// Detect and return:
// "null", "array", "object", "number", etc.

// Manual string to number
// Convert "123" → 123 without using Number()
// hint: use char codes

// Check if number is integer (without Number.isInteger)
// input: 10 → true
// input: 10.5 → false
// Remove falsy values from array
// input: [0, "hello", false, "", 5]
// output: ["hello", 5]

// Validate email (basic)
// check if string contains "@" and "."

// Mask phone number
// input: "9876543210"
// output: "98******10"
const maskNumber = (num) => {
    let str = num.toString();
    
    return str.slice(0, 2) + "*".repeat(str.length - 4) + str.slice(-2);
};
console.log(maskNumber(938263826482))