let nums = [];
for (let i = 0; i < 5; i++) {
  let val = prompt("Enter the number");
  nums.push(Number.parseInt(val));
}
const mean = (nums) => {
  sum_arr = nums.reduce((acc, curr) => acc + curr, 0);
  let avg = sum_arr / nums.length;
  console.log(avg);
};
console.log(mean(nums));
