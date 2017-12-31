var nj = require('./NumpyJS.js');
console.log(nj);

var a = [
  [
    [4, 28],
    [66, 6]
  ],

  [
    [68, 51],
    [64, 5]
  ],

  [
    [76, 96],
    [31, 6]
  ]
];




console.log(nj.findDeterminant(a));
