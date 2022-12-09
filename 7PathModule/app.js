
//Find list of built-in modules here: https://nodejs.org/dist/latest-v16.x/docs/api/
//We load a built-in module path and assign it to the obj path 
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);