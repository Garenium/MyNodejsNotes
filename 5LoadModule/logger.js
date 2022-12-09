//Both the variable and the function are scoped to private by default
//var url = 'https://mylogger.io/log'; //This is prviate

//function log(message){ //This is also private
//    //send an HTTP request
//    console.log(message);
//}


//That's where modules come in 
var url = 'https://mylogger.io/log';

function log(message){
    //send an HTTP request
    console.log(message);
}

//Make it publicly avaible
//Now "log" function and var url will be outside outside this file's
//module
//Here we are 
module.exports.log = log;
module.exports.url = url;

//If you don't want to export a variable or a function to a module
// module.exports = log;

/*
 * Where in logger.js
 * const logger = require('./logger');
 * 
 * If there is an object log (module.exports.LOG)
 * logger.log('message');
 *
 * If there is NO object log (module.exports)
 * logger('message');
 * 
    * */

//A caveat is that you can CHANGE the name of the 
//object that's outside of this module
//when you export it
// module.exports.endPoint = url;
//Other javascript files outside of this module 
//will recognize url (the one we dearly love) as "endPoint"
//So outside of this module, the object url IS endPoint.
