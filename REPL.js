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

var ans = nj.reshape(a, [2, 3, 2]);
console.log(ans);
