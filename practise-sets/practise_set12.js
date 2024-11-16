const a = (text, n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 2000 * n);
  });
};

//iife ==> immediately invoke function expression

(async function () {
  console.log("This is IIFE !");
  console.log(await a("I am resolving after 1 second", 1));
  console.log(await a("I am resolving after 2 seconds", 2));
})();

function sum(a, b, c) {
  return a + b + c;
}
let x = [1, 3, 4, 5];
console.log(sum(...x));

// function for simple interest
function simpleInterest(p, r, t) {
  return (p + r + t) / 100;
}

console.log(simpleInterest(2, 3, 4));
