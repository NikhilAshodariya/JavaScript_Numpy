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
var to_operate = [1, 2, 3];
res = nj.subtract(to_operate, b);
console.log("-----------Printing b -------------");
console.log(b);
console.log("-----------Printing to add----------");
console.log(to_operate)
console.log("-------Printing result----------------");
console.log(res);
console.log(nj.mean(a));



// console.log(nj);
// // var a = [10, 20, 30, 40, 50, 60, 70, 10, 20, 30];
// var max = nj.findHighestElement(a);
// var min = nj.findLowestElement(a);
// var square = nj.square(a);
// var range = nj.findRange(a);
// var count = nj.findFrequency(a, 10);
// var mean = nj.mean(a);
// var median = nj.findMedian(a);
// var mode = nj.findMode(a);
// var population_SD = nj.findPopulationStandardDeviation(a);
// var population_variance = nj.findPopulationVariance(a);
// var sample_SD = nj.findSampleStandardDeviation(a);
// var sample_variance = nj.findSampleVariance(a);
// console.log(`Max = ${max}`);
// console.log(`Min = ${min}`);
// console.log(`Squared = ${square}`);
// console.log(`Range = ${range}`);
// console.log(`Frequency = ${count}`);
// console.log(`Mean = ${mean}`);
// console.log(`Median = ${median}`);
// console.log(`Mode = ${mode}`);
// console.log(`Standard Deviation = ${population_SD}`);
// console.log(`Population Variance ${population_variance}`);
// console.log(`Sample Standard Deviation = ${sample_SD}`);
// console.log(`Sample Variance = ${sample_variance}`);
