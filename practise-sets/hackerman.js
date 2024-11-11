let a = [
  "Initislizing hacking tool..",
  "Connecting to facebook...",
  "Connecting to server 1",
  "Connection failed. Retrying ....",
  "Connected sucessfully....",
  "Username iamharry",
  "Trying brute force",
  "200k passwords tried...",
  "Match not found",
  "Another 200k passowrds tried...",
  "Match not found",
  "Accessing Account",
  "Hack Sucessfull",
];

const sleep = async (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true), seconds * 10000;
    });
  });
};

const showHack = async (message) => {
  await sleep(5);
  document.getElementById("hacker_msg").innerHTML += message + "</br>";
};

(async () => {
  for (let i = 0; i < a.length; i++) {
    showHack(a[i]);
  }
})();
