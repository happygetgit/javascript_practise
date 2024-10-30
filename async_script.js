async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Deg");
    }, 1000);
  });
  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 Deg");
    });
  });

  console.log("Fetching Delhi Weather Please wait....");
  let delhiW = await delhiWeather;
  console.log("Fetching Bangalore Weather Please wait...");
  let bangaloreW = await bangaloreWeather;
  console.log("Completing to load the function..");
  return [delhiW, bangaloreW];
}

const cherry = async () => {
  console.log("Hey i am cherry and i am executed...");
};
const main = async () => {
  console.log("welcome to weather control room");
  let a = await harry();
  let b = await cherry();
};

main();
