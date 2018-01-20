var nj = require('./NumpyJS.js');

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

var c = [
  [
    [92.57031592, 97.06288084, 59.04685784],
    [7.75570821, 20.24034906, 1.41957054],
    [61.87182155, 46.62832966, 30.22243911]
  ],

  [
    [61.62614107, 86.42055107, 33.47506622],
    [74.88655201, 7.3756791, 34.84570081],
    [40.58789698, 12.94548156, 58.03417018]
  ]
];

var d = [[[[  8.33390083,  60.98443236,  82.87877161],
         [ 52.54024261,  15.43516277,  43.08813459],
         [ 89.43839666,  47.81194975,  59.74936355]],

        [[ 51.35553267,  55.52608544,  36.40171026],
         [ 33.75042574,  96.4145811 ,  88.62963709],
         [ 83.15064924,  93.02738429,  30.76654763]]],


       [[[ 59.42430445,  60.59745839,  46.22135815],
         [ 74.23064867,  50.31342897,  92.88685077],
         [  5.77663918,  14.89315154,  11.56309618]],

        [[ 28.54283808,  58.36207678,  54.98849069],
         [ 96.90018582,  89.53785394,  59.86437077],
         [ 71.28812584,  16.81349852,  50.28981183]]]];

/**
 * For mean if the axis is zero then it takes the first element of the first
 * row and adds with the next element of the second row example.
 * in case of matrix d it adds 0.28566023,64.12966 and divides it by 2.
 * so to implement it u take d[0], d[1], d[2]... flatten it
 * then add the corresponding elements of the each flattened data.
 */

/**
 * For mean if the axis value is same as the last value of the dimension then
 * u should add row wise mean in case of matrix d this row
 * [  0.28566023,  11.13529993,  99.25997188] gets summed and it becomes
 * the first value of the ans and so on.
 */

console.log(nj.mean(b,1));
