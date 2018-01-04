var nj = require('./NumpyJS.js');
console.log(nj);

var a = [
  [3, 5, 2],
  [2, 4, -2],
  [7, 1, 1]
];

var b = [
  [2, 3, 4],
  [5, 32, 2],
  [5, 3, 2]
];

console.log(nj.divide(a, b));
