const path = require('path');
// console.log(path);
const myFileName = __filename;
console.log(myFileName);

// console.log('filename with extantion',path.basename(myFileName));
// console.log('fullpath for dirname', path.dirname(myFileName));
// console.log('extention', path.extname(myFileName));
// console.log('filename without extantion',path.basename(myFileName, '.js'));

const pathToTextFile = path.resolve(__dirname, 'text.txt');
console.log(pathToTextFile);
