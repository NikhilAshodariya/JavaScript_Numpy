var clone = require('./clone.js');


var a = [
  [1, "2", 3],
  [4, true, 6],
  [7, 8, 9],
  [5, 2, 1]
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

// a = [1,2,3]
a_copy = clone.deepCloneMatrix(a);
a[0] = [65,43,24];
console.log("-----------------printing a_copy ---------------------");
console.log(a_copy);
console.log("----------------printing a----------------------");
console.log(a);

d_copy = clone.deepCloneMatrix(d);
d[0] = a;
console.log("-----------------printing d_copy ---------------------");
console.log(d_copy);
console.log("----------------printing d----------------------");
console.log(d);
