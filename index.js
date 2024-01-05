const identify = require('./information')
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello ! i'm ${identify.name} from ${identify.campusName} !`,
    e : "oO",
    T : "U "
}));

// console.log(identify)

// console.log(`Hello ! i'm ${identify.name} from ${identify.campusName}`)
