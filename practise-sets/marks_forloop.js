let marks = {
  harry: 80,
  shubham: 90,
  lavish: 100,
  shalini: 50,
};
// for (let i = 0; i < Object.keys(marks).length; i++) {
//   console.log(
//     "Marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]
//   );
// }

for (let key in marks) {
  console.log("Marks of " + key + " is " + marks[key]);
}
