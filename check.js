var basicFunc = require('./basicFunction.js');
var adder = require('./Adder.js');
var clone = require('./clone.js');

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



/*
 * Position zero has the original data.
 * Position one has a calculated data.
 */

res = adder.add(e, [1, 2, 3]);
console.log(res[1]);

/*
 * if we add true in add parameter then the function will modify the given data itself and will return only one value
 * that is the actual calculated value
 */

res1 = adder.add(e, [1, 2, 3], true);
console.log(res1);
