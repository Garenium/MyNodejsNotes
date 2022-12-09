const fs = require('fs');

//Get all the files synchronously
// const files = fs.readdirSync('./');
// console.log(files);

//Get all the files async (use async over sync)
fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
});

//Doesn't work because readdir accepts two args
// fs.readdir('./');
