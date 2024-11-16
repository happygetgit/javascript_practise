// time clock display functions
function clock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const time = hours + ":" + minutes + ": " + seconds;
  return time;
}

setInterval(function () {
  let time = clock();
  document.getElementById("clock").textContent = time;
}, 1000);

// set alarm functions

async function set_alarm() {
  const alarm_val = document.getElementById("time").value;
  await checkAlram(alarm_val);
}

async function checkAlram(alarm_val) {
  console.log("function entered");
  const interval = setInterval(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0"); // Format hours to 2 digits
    const minutes = String(now.getMinutes()).padStart(2, "0"); // Format minutes to 2 digits
    const seconds = String(now.getSeconds()).padStart(2, "0"); // Format seconds to 2 digits
    const currentTime = hours + ":" + minutes;
    console.log(currentTime);
    if (currentTime === alarm_val) {
      console.log("timer");
      clearInterval(interval);
      setTimeout(() => {
        audio_play();
      }, 1000);
    }
  }, 1000); // Check every second
}

document.getElementById("set_alarm").addEventListener("click", () => {
  set_alarm();
});

// set audio play for alarm
function audio_play() {
  const audio = new Audio("https://www.soundjay.com/buttons/button-2.mp3");
  audio.play().catch((error) => {
    console.error("Playback error:", error);
  });
}

document.getElementById("alarm_sound").addEventListener("click", () => {
  setTimeout(() => {
    audio_play();
  }, 2000);
});
