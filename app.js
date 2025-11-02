const math = require('./mathModule');
const string = require('./stringModule');
const date = require('./dateModule');
const message = require('./messageModule');

console.log("=== Node.js Modularization Example ===");

console.log("Addition 5 + 3 =", math.add(5, 3));
console.log("Multiplication 4 * 6 =", math.multiply(4, 6));

console.log("Uppercase of 'hello' =", string.toUpperCase("hello"));
console.log("Length of the word 'modularization' =", string.getLength("modularization"));

console.log("Today's date:", date.getCurrentDate());
console.log("Current time:", date.getCurrentTime());

console.log(message.sayHello("Milenia"));
