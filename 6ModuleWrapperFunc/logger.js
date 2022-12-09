//with nodejs, codes that are called are wrapped inside the 
//the module wrapper function. with node, codes are never called directly 
//the require code in app.js is not global. It is local in the module scope
//(function (exports, require, module, __filename, __dirname) {})

console.log(__filename);
console.log(__dirname);

var url = 'https://mylogger.io/logger';

function log(message){
    console.log(message);
}

//module HAS NO S
module.exports = log;
