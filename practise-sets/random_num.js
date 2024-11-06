//let num = 43;
let rand_num = Math.random() * 10;
rand_num = Math.round(rand_num);
let i;
while (i != rand_num) {
  i = prompt(rand_num + " : Enter the number ?");
}
console.log("You have entered a correct number.");
