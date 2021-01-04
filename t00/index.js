console.log('hello', __dirname);
console.log('hello', __filename);

const Obj = require('./user')

console.log(Obj.user);

Obj.sayHello();