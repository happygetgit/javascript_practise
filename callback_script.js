// Synchronous function
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

function callMe() {
  console.log("I am callback function");
}

greet("shalini", callMe);

function calc(a, b, callback) {
  console.log(a + b);
  callback(a, b);
}

function add(a, b) {
  console.log("i am adding two values:" + (a + b));
}

function multiply(a, b) {
  console.log("i am multiplying two values:" + a * b);
}

calc(5, 4, add);
calc(6, 7, multiply);

// Asynchronous function
function doTask(callback) {
  console.log("Starting a task ...");
  // setTimeout(function, delay);
  setTimeout(() => {
    console.log("Task Completed...");
    callback();
  }, 2000);
}

function afterTask() {
  console.log("successsfully comepleted all the tasks...");
}

doTask(afterTask);
