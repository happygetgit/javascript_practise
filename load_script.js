const loadscript = (src) => {
  return new Promise((resolve, reject) => {
    console.log("This is begining");
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    console.log(src);
    document.body.appendChild(script);
    script.onload = () => {
      console.log("This is onload function");
      resolve(1);
    };
    script.error = () => {
      console.log("This is error function");
      reject(0);
    };
  });
};
let p1 = loadscript(
  "https://cndn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
);
p1.then((value) => {
  console.log(value);
  console.log("This is successfull");
}).catch((value) => {
  console.log("we are sorry but we are having  problem loading this script");
});
