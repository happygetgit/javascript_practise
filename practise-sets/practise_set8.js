document.getElementById("button4").addEventListener("click", function () {
  var link = "https://www.w3schools.com/";
  window.location = link;
});

const element = document.getElementById("bulb");
let isVisible = true;
let intervalId;
document.querySelector("#bulbon").addEventListener("click", function () {
  element.style.backgroundColor = "yellow";

  intervalId = setInterval(function () {
    if (isVisible) {
      element.style.opacity = 0; // Make it invisible
    } else {
      element.style.opacity = 1; // Make it visible
    }
    isVisible = !isVisible; // Toggle visibility state
  }, 500);
});

document.querySelector("#bulboff").addEventListener("click", function () {
  element.style.backgroundColor = "white";
  isVisible = false;
  clearInterval(intervalId);
});
