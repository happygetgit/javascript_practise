let p1 = new Promise((resolve, reject) => {
  console.log("I am the begining of the promise p1");
  setTimeout(() => {
    console.log("I am p1 promise and fullfilled...");
    resolve(56);
  }, 2000);
});

p1.then((value) => {
  console.log("This is p1 catch...");
  // return p1;
  // setTimeout(() => {
  //   console.log("This is p1: ", value);
  // }, 1000);
  let p2 = new Promise((resolve, reject) => {
    console.log("I am the begining of the promise p2");
    setTimeout(() => {
      console.log("I am p2 promise and fullfilled...");
      resolve(95);
    }, 1000);
  });
  console.log(p2);
});
