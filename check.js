var nj = require('./NumpyJS');

var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [5, 2, 1]
];

var b = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [5, 2, 1]
];

var c = [
  [1],
  [2],
  [3],
  [4]
];



var d = [
  // (3,4,5)
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
]
var e = [
  [
    [1, 1, 1],
    [4, 4, 4],
    [7, 7, 7],
    [5, 5, 5]
  ],
  [
    [1, 1, 1],
    [4, 4, 4],
    [7, 7, 7],
    [5, 5, 5]
  ],
  [
    [1, 1, 1],
    [4, 4, 4],
    [7, 7, 7],
    [5, 5, 5]
  ]
]

// [ [ 2, 4, 10 ], [ 5, 7, 13 ], [ 8, 10, 16 ], [ 6, 4, 8 ] ]
// [ [ 2, 4, 10 ], [ 5, 7, 13 ], [ 8, 10, 16 ], [ 6, 4, 8 ] ]


/*
 * Position zero has the original data.
 * Position one has a calculated data.
 */
res = nj.add(b,a);
console.log("-------Printing first result----------------");
console.log(res);
// console.log("-------Printing array D----------------------");
// console.log(d);
// console.log(b);
//
//
// res1 = subtractor.subtract(d,b,true);
// console.log("-------Printing second result----------------");
// console.log(res1);
// console.log("-------Printing array D----------------------");
// console.log(d);
// console.log(b);
