const EventEmitter = require('events')

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message) {
        //send an HTTP request

        console.log(message);

        //raise the event
        this.emit('messageLogged', { id: 1, url: 'httpd://' });
    }
}


module.exports = Logger;