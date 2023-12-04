const myInformations = require("./information");
console.log(myInformations);

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `${myInformations.name}, ${myInformations.campus}`,
    e: "oO",
    T: "U ",
  })
);
