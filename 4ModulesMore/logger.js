//Both the variable and the function are scoped to private by default
//var url = 'https://mylogger.io/log';

//function log(message){
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
module.exports.log = log;
module.exports.url = url;

//A caveat is that you can CHANGE the name of the 
//function or variable that's outside of this module
//when you export them
// module.exports.endPoint = url;
//Other javascript files outside of this module 
//will recognize url (the one we dearly love) as "endPoint"
//So outside of this module, url IS endPoint.
