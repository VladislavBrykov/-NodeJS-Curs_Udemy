const path = require('path')

console.log(path.basename(__filename)); //вывести только название файла
//path_refs.js

console.log(path.dirname(__filename));
///Users/vladislav/Desktop/Нода Курс/refs

console.log(path.extname(__filename));
//js

console.log(path.parse(__filename));
// {
//     root: '/',
//     dir: '/Users/vladislav/Desktop/Нода Курс/refs',
//     base: 'path_refs.js',
//     ext: '.js',
//     name: 'path_refs'
//   }

console.log(path.parse(__filename).ext);
//.js

console.log(path.join(__dirname, '..));