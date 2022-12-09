//Events are classes. It's a convention to have
//the first letter to be uppercase
const EventEmitter = require('events');
//emitter is an object
const emitter = new EventEmitter();

//Order is important
//First make a listener (a object a can emit)
//Then make emit it with emit(listener name)

//Register a listener
/*emitter.on('messageLogged', function(){
    console.log('Listener called');
});*/

//raise the event messageLogged (we needed a listener before we emit like so)
//emit can accept three args:
//second arg is an id
//third arg is a url
//However it is not ideal to pass such values like this:
/*emitter.emit('messageLogged', 1, 'url');*/

// emitter.on('messageLogged', function(arg){ //arg, e, or event Arg
//     console.log('Listener called ', arg);
// });
//or
emitter.on('messageLogged', (arg) => {
    console.log('Listener called ', arg);
})

//It is a much better practice to pass them as an object instead
//But notice that the on method has a function parameter.
//We need to pass the values to the function
emitter.emit('messageLogged', {id:1, url: 'http://'});

//Raise: logging (data: message)


