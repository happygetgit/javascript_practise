let age = prompt("Enter the age ?");
age = Number.parseInt(age);
if (age >= 18) {
  if (confirm("Are you sure you entered the right age to drive ?")) {
    alert("Congratulations, you are eligible to drive.");
    document.body.style.backgroundColor = "lightblue";
  }
} else if (age >= 4 && age < 18) {
  window.location.href = "https://www.google.com";
} else {
  document.body.style.backgroundColor = "red";
  console.error("You are under 18 so not eligible to drive the vehicle.");
}
