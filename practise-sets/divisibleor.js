let number = prompt("Enter the number ?");
number = Number.parseInt(number);
if (number % 2 == 0 || number % 3 == 0) {
  console.log("Number is divisible by 2 or 3");
} else {
  console.log("Number is not divisible by 2  & 3");
}
