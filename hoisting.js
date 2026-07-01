console.log(a);
var a = 10;

// sayHello();

// var sayHello = function () {
//   console.log("Hello");
// };

// var a = 10;

// function test() {
//   console.log(a);
//   var a = 20;
// }

// test();

var a = 10;

function test() {
  console.log(a);
}

function test2() {
  var a = 20;
  test();
}

test2();

console.log([1+2]+[3,4]);
// [3].toString()     → "3"
// [3,4].toString()   → "3,4"
console.log([] + []); // ""
console.log([] + {}); // [object Object]
console.log({} + []); // [object Object]
console.log([] == false); // true
console.log(undefined + 1); // Nan
console.log(null + 1); // 1
console.log([] + 1 + 2); // 12
console.log(true + false); // 1
console.log([] == ![]); // true