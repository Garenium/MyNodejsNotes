const EventEmitter = require('events');
//const emitter = new EventEmitter(); we don't need when we have a class Logger

var url = 'https://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){ //without "function" keyword in a class mean it's a METHOD
        //send an HTTP request
        console.log(message);

        //raise the event messageLogged 
        //emitter.emit('messageLogged', {id: 1, url: 'http:// '}); //Note how "this" takes place of emitter now
        this.emit('messageLogged', {id: 1, url: 'http:// '});
    }
}

module.exports = Logger;

