// Guess the number

let rand_num = Math.random();
rand_num = Math.round(rand_num);
let max_guess = 1;
let score = 0;
let user_num = prompt("Enter the number ?");
const guess_num = (user_num) => {
  if (user_num == rand_num) {
    score += 1;
    return `Congratulations! ${user_num} is the right answer. score is ${score}`;
  } else if (max_guess != 10) {
    user_num = prompt("Enter the number ?");
    max_guess += 1;
    if (max_guess != 10) {
      guess_num(user_num);
    }
    return `Wrong answer and max guess is ${max_guess}, right answer is ${rand_num}`;
  } else if (max_guess == 10 && user_num != rand_num) {
    return "Reached max number of guesses";
  } else {
    return "Game over";
  }
};

console.log(guess_num(user_num));
