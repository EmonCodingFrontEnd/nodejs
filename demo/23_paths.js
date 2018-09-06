const path = require('path');

const mod = require('./02_cusmod');
console.log(mod.testVar);

console.log('__dirname    ', __dirname);
console.log('__filename    ', __filename);
console.log('process.cwd  ', process.cwd());
console.log('./           ', path.resolve('./'));