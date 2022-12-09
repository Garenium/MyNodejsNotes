//loading os module
const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

// console.log('Total Memory %s\nFree Memory: %s', totalMem, freeMem);
//or (better)
//Template string
//ES6 / ES2015 : ECMAScript 6
console.log(`Total Memory: ${totalMem}\nFree Memory: ${freeMem}`);
