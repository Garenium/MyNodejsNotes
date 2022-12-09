
//Nodejs function (not available in browsers)
//It takes one argument that is the path of the module
//we want to load.
//Kinda like include " " for C/C++
//require('./logger.js')
//You can make node assume the file is a js file without an extension

//require('./logger');

// var logger = require('./logger');

//It is better to store the module in a constant
//Because we don't want to accidentally to rewrite the value of logger
const logger = require('./logger');



// console.log(logger);
logger.log("Message");


