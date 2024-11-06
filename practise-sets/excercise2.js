const opt = ["snake", "water", "gun"];
let max_win = 0;
let max_lose = 0;

// Generate a random index within the array's bounds
const randomIndex = Math.floor(Math.random() * opt.length);

// Get the random string using the random index
const game_opt = opt[randomIndex];

let user;

const user_select = () => {
  user = prompt("select any one: snake, water or gun ?");
  console.log("ML: " + game_opt); // This will log a random fruit from the array
  console.log("user: " + user);
  return user;
};

const game_start = () => {
  user_select();
  console.log(user);
  if (max_win < 3 || max_lose < 3) {
    if (user == game_opt) {
      alert("right answer, but no score.");
    } else if (user == "snake" && game_opt == "water") {
      console.log("snake dwell into water.");
      max_lose += 1;
    } else if (user == "snake" && game_opt == "gun") {
      console.log("snake got killed");
      max_lose += 1;
    } else if (user == "water" && game_opt == "snake") {
      console.log("you lost");
      max_win += 1;
    } else if (user == "water" && game_opt == "gun") {
      console.log("you lost");
      max_win += 1;
    } else if (user == "gun" && game_opt == "water") {
      console.log("you lost");
      max_lose += 1;
    } else if (user == "gun" && game_opt == "snake") {
      console.log("you lost");
      max_win += 1;
    } else {
      console.log("invalid game");
    }
    console.log("win: " + max_win);
    console.log("lose: " + max_lose);
    game_start();
  } else {
    pmpt = max_win == 3 ? "You won the game" : "you reached max lose count.";
    alert(pmpt);
  }
};

game_start();
