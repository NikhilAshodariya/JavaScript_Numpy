var nj = require('./NumpyJS');

var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [5, 2, 1]
];

var c = [
  [10],
  [20],
  [30],
  [40]
];

console.log("-------------------Function List-------------------");
console.log(nj);
console.log("---------------------------");

console.log(c);
console.log("---------------------");
console.log(nj.log(a, c));
