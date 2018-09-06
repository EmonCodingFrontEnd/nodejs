const fs = require('fs');
const {promisify} = require('util');

const read = promisify(fs.readFile);

/*
// 方式一
read('./43_promisify.js').then(data => {
  console.log(data.toString());
}).catch(ex => {
  console.log(ex);
});*/

// 方式二
async function test() {
  try {
    const content = await read('./43_promisify.js');
    console.log(content.toString());
  } catch (ex) {
    console.log(ex);
  }
}

test();