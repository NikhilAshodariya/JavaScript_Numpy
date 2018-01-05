var nj = require('./NumpyJS.js');
// console.log(nj);


var a = [
  [3, 5, 2],
  [2, 4, -2],
  [7, 1, 1]
];

var b = [
  [2, 4, 6],
  [9, 6, 8],
  [5, 2, 14]
];
console.log(nj.multiply(a, b));
