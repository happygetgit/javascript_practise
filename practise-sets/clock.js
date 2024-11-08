const clock = () => {
  let timer;
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  timer = hours + " : " + minutes + " : " + seconds;
  timer = hours > 12 ? timer + " PM " : timer + " AM ";
  document.getElementById("clock").textContent = timer;
};

setInterval(function () {
  clock();
}, 1000);
