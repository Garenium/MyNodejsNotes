/*
IN JAVASCRIPT, FUNCTIONS ARE OBJECTS
//1.
//Do functions with the same function name
//be overriden?

function logger(name){
    console.log(name);
}

//This function precedes the one 
//above (in other words, since both
//have the same name. This one is chosen 
//because it is the closest to the 
//module assignment)
function logger()
{
    console.log("Hi!");
}
module.exports = logger;
*******************/

/*

//2.
//How will a module behave if there are multiple functions (without object)?

function logger(){
    console.log("Hi");
}

function logger(name){
    console.log(name);
}

function sayWelcome(){
    console.log("Welcome!");
}

//Whichever is assigned last is gonna be used
module.exports = logger;
module.exports = sayWelcome; //Only this will run [Function: sayWelcome]
**************************/

/*

//3.
//How will a module behave if there are multiple functions (with the same object)?
function log(message){
    console.log(message);
}

function sayHi(){
    console.log('Hi');
}

function sayWelcome(){
    console.log('Weclome');
}

module.exports.log = log;           //{ log: [Function: log] } 
//module.exports.log = sayHi;         //function log replaced to { log: [Function: sayHi] } 
//module.exports.log = sayWelcome;    //function sayHi replaced to { log: [Function: sayWelcome] } 
******************************/