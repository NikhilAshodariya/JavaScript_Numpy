var nj = require('./NumpyJS.js');
console.log(nj);

var a = [
  [47, 10, 84, 64],
  [33, 19, 98, 25],
];

var b = [
  [93, 85],
  [66, 91],
  [95, 77],
  [84, 30]
];

console.log(nj.matrixMultiply(a, b));
