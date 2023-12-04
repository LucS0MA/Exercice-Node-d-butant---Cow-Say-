const myInformations = require("./information");
console.log(myInformations);

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `${myInformations.myInformations.name}, ${myInformations.myInformations.campus}`,
    e: "oO",
    T: "U ",
  })
);
