let arr = [1, 2, 3, 4, 5];
let num;
while (num != 0) {
  num = prompt("Enter the number ?");
  arr.push(Number.parseInt(num));
}
console.log(arr);

// divisible by 10

let n = arr.filter((x) => {
  return x % 10 == 0;
});
console.log("division of 10 in array: " + n);

//square of numbers in array

let sq = arr.map((x) => {
  return x * x;
});
console.log("square of numbers in array: " + sq);

console.log("lets see " + arr.pop());
// reduce or factorial of numbers in array
let n1 = arr.reduce((x1, x2) => {
  return x1 * x2;
});
console.log("reduce or factorial of numbers in array: " + n1);
