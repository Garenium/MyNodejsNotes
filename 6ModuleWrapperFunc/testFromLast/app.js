const logger = require('./logger');

/*
//1.
 console.log(logger);
 logger();
 logger("Alex");

 //Hi
 //Hi

*/

//////////////////////////////////

/*

//2.
 console.log(logger);
 logger('Jave'); //prints the last one
 logger();

 //If logger()
 //Jave
 //undefined

 //If sayWelcome
 //Welcome!
 //Welcome!
*/

//////////////////////////////////

/*
//3.
console.log(logger);
logger.log();

//logger.log.sayWelcome(); does not work
//The object log will be treated like a function here
*/
