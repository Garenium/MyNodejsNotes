// console.log(); //console object is global scope

//global object **window** THAT BELONG TO BROWSERS
// setTimeout(); //set "timer" in a browser or in node (same as window.setTimeout())
// clearTimeout(); //clears the "timer" 

// setInterval(); //Repeatedly call a function after a delay
// clearInterval(); //clears the above

//WHen you only compile this line 
//You can't compile it with nodejs
//because nodejs HAS NO WINDOW OBJECT
//NodeJS DOES NOT BELONG TO BROWSERS
//It is ITS OWN RUNTIME ENVIRONMENT
//The window object can only be compiled in 
//browsers
// window.console.log("Hello")

//Variables are also available in the window object
// var message = '';
// window.message

//Instead of "window" object that runs on browsers
//In nodejs, we have the "global" object

//globalThis.setTimeout same as setTimeout for nodejs
//As long as you're compiling with nodejs, setTimeout will be compiled
//as a nodejs one
//There's an exception to variables
//"global" object does not have variables in mind (unlike window object)
 var message = 'Hello';
 console.log(global.message); //returns undefined
