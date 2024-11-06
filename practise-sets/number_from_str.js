let str = "please 2 give Rs 1000";
const numbers = str.match(/\d+/g); // /g means search the entire string dont stop when u found at the first step.
console.log(numbers);
console.log(numbers ? numbers.map(Number) : []);

let str2 = "shalini";
let arr = str2.split("");
arr[2] = "R";
console.log(arr.join(""));
