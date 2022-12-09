const fs = require('fs');
const EventEmitter = require('events'); //Create a class

//Create an object
const emitter = new EventEmitter();

emitter.emit('myMessage', fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result: ', files);
}));

function getMessage(){

    //Isn't this asynchronous?
    // console.log(this);
    //calls emitter.emit()
    emitter.on('myMessage', (e) => {
        console.log('Message ', e);
    });
    console.log(this);

}

module.exports.getMessage = getMessage;
