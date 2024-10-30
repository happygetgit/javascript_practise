let p1 = new Promise((resolve, reject) => {
  console.log("Promise p1 is pending.....");
  setTimeout(() => {
    console.log("i am a promise p1 and i am fullfilled...");
    resolve(true);
  }, 2000);
});
let p2 = new Promise((resolve, reject) => {
  console.log("Promise p2 is pending.....");
  setTimeout(() => {
    console.log("i am a promise p2 and i am rejected....");
    reject(new Error("I am an error"));
  }, 2000);
});

p1.then((value) => {
  console.log(value);
});
p2.catch((value) => {
  console.log("p2 is :" + value);
});

console.log(p1);
console.log(p2);
