var nj = require('./NumpyJS.js');
console.log(nj);

var a = [
  [3, 5, 2],
  [2, 4, -2],
  [7, 1, 1]
];

console.log(nj.matrixInverse(a));
