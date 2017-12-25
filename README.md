# JavaScript Numpy

This project aims at providing equivalent of Numpy in JavaScript.

## Prerequisites

Node.js, matrix_deep_clone

## Installing

First, head over to nodejs.org and install Node.js.

```
$ npm install jsnumpy
```

## Running the tests

First install the module matrix_deep_clone then type

```
$ cd node_modules/jsnumpy/
```

After going inside the library type

```
$ npm test
```

The above command will run check.js. The test file creates and 2D array and subtracts it

### Breaking down into end to end tests

```
var nj = require('jsnumpy');
```

```
var a = [[1,2,3],[4,5,6],[7,8,9]]
```

```
var b = [1,2,3]
```

```
var res = nj.add(a,b);
```

## Basics

### Array Creation

```javascript
> var a = nj.fillWithNumber([2,3,4],5);
> a
[ [ [ 5, 5, 5, 5 ], [ 5, 5, 5, 5 ], [ 5, 5, 5, 5 ] ],
  [ [ 5, 5, 5, 5 ], [ 5, 5, 5, 5 ], [ 5, 5, 5, 5 ] ] ]
```

**Note**: The default parameter to fill in array is zero. Here number 5 is used to fill the array.

```javascript
> var dim = nj.get_Dimensions(a);
> dim
[2,3,4]
```

```javascript
> var totalNumber = 10;
> var minRange = 3;
> var maxRange = 25;
> var ans = nj.generateRandomNumbers(totalNumber,minRange,maxRange);
> ans
[ 10, 20, 19, 14, 12, 18, 23, 25, 6, 22 ]
```

**Note**: The default parameter value for minRange is zero and maxRange is totalNumber

## Matrix Manipulation

```javascript
> var ans = nj.generateRandomNumbers(16,3,25);
> var res = nj.reshape(ans,[4,2,2]);
> res
[ [ [ 13, 3 ], [ 21, 16 ] ],
  [ [ 25, 4 ], [ 9, 15 ] ],
  [ [ 20, 12 ], [ 17, 14 ] ],
  [ [ 5, 22 ], [ 11, 24 ] ] ]

> ans = nj.flatten(res);
> ans
[ 13, 3, 21, 16, 25, 4, 9, 15, 20, 12, 17, 14, 5, 22, 11, 24 ]
```

**Note** : In reshape the first parameter is the data and the second parameter is dimension

## Arithmetic Operation

```javascript
> var a =  [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [5, 2, 1]
];

> var c = [
  [1],
  [2],
  [3],
  [4]
];

> var ans = nj.add(a,c);
> ans
  [
    [2, 3, 4],
    [6, 7, 8],
    [10, 11, 12],
    [9, 6, 5]
  ]
> var ans = nj.subtract(a,c);
[
  [0, 1, 2],
  [2, 3, 4],
  [4, 5, 6],
  [1, -2, -3]
]

> var ans = nj.ElementMultiply(a,c);
> ans
[
  [1, 2, 3],
  [8, 10, 12],
  [21, 24, 27],
  [20, 8, 4]
]
```

**Note** : ElementMultiply is not a matrix mulitply instead it multiplies element by element.

## Statistics Operation

```javascript
> var a =   
  [
   [
      [4, 5, -6],
      [8, 0, 4]
   ],
   [
      [10, 15, -70],
      [-30, 70, 40]
   ],
   [
      [12, 3, 10],
      [80, 50, 40]
   ]
 ];

> var ans = nj.negative(a);
> ans
[
  [
    [-4, -5, 6],
    [-8, -0, -4]
  ],
  [
    [-10, -15, 70],
    [30, -70, -40]
  ],
  [
    [-12, -3, -10],
    [-80, -50, -40]
  ]
]

> var res = nj.abs(ans);
> res
[
  [
    [4, 5, 6],
    [8, 0, 4]
  ],
  [
    [10, 15, 70],
    [30, 70, 40]
  ],
  [
    [12, 3, 10],
    [80, 50, 40]
  ]
]
```

```javascript
> var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [5, 2, 1]
];
> var ans = nj.mean(a);
> ans
4.416666666666667

> ans = nj.square(a);
> ans
[
  [1, 4, 9],
  [16, 25, 36],
  [49, 64, 81],
  [25, 4, 1]
]

> ans = nj.sum(a);
> ans
53

> ans = nj.totalElements(a);
> ans
12

> ans = nj.findHighestElement(a);
> ans
9

> ans = nj.findLowestElement(a);
> ans
1

> ans = nj.findRange(a);
> ans
8

> var d = [1,2,3,4,5,6,7,8];
> ans = nj.findMedian(d);
> ans
4.5

> ans = nj.findFrequency(a,1);
> ans
2
```

**Note**: In findFrequency the first parameter is the data and the second parameter is the data whose frequency is required.

```javascript
> var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [5, 2, 1]
];

> var ans = nj.findAllFrequency(a);
> ans
{
  '1': 2,
  '2': 2,
  '3': 1,
  '4': 1,
  '5': 2,
  '6': 1,
  '7': 1,
  '8': 1,
  '9': 1
}
> ans = nj.findPopulationStandardDeviation(a);
> ans
2.5967394084804805

> ans = nj.findPopulationVariance(a);
> ans
6.743055555555555
```

**Note**: nj.findSampleVariance, nj.findSampleStandardDeviation is also available

```javascript
> var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [5, 2, 1]
];

> var ans = nj.findMode(a);
> ans
[1,2,5]

> ans = nj.findMode([1,2,3,4,5]);
> ans
undefined

> ans = nj.power(a,3);
> ans
[
  [1, 8, 27],
  [64, 125, 216],
  [343, 512, 729],
  [125, 8, 1]
]

> ans = nj.exp(a);
> ans
[
  [2.71828, 7.3890461584, 20.085496391455553],
  [54.5980031309658, 148.41265995084171, 403.42716529117405],
  [1096.6279948676927, 2980.9419458889515, 8103.034872671019],
  [148.41265995084171, 7.3890461584, 2.71828]
]
```

## Trigonometric Functions

**Note** : All the functions like sin, cos, tan allows radian as well as degree.

```javascript
> var a = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
  [180, 120, 100]
];
> var ans = nj.sin(a);
> ans
[
  [0.174, 0.342, 0.5],
  [0.643, 0.766, 0.866],
  [0.94, 0.985, 1],
  [0, 0.866, 0.985]
]

> ans = nj.sin(a,"radian");
> ans
[
  [-0.544, 0.913, -0.988],
  [0.745, -0.262, -0.305],
  [0.774, -0.994, 0.894],
  [-0.801, 0.581, -0.506]
]
```

**Note**: nj.cos, nj.tan also exists.

```javascript
> var a = [
  [0.1, 0.2, 0.3],
  [0.4, 0.5, 0.6],
  [0.7, 0.8, 0.9],
  [0.75, 0.45, 0.1]
];
> var ans = nj.sinInverse(a);
> ans
[
  [6, 12, 17],
  [24, 30, 37],
  [44, 53, 64],
  [49, 27, 6]
]
```

**Note**: The output of sinInverse, cosInverse, tanInverse is in degree.

```javascript
> var a = [
  [0.1, 0.2, 0.3],
  [0.4, 0.5, 0.6],
  [0.7, 0.8, 0.9],
  [0.75, 0.45, 0.1]
];

> var ans = nj.hyperbolicSine(a);
> ans
[
  [0.10016675001984403, 0.20133600254109402, 0.3045202934471426],
  [0.4107523258028155, 0.5210953054937474, 0.6366535821482412],
  [0.7585837018395334, 0.888105982187623, 1.0265167257081753],
  [0.82231673193583, 0.46534201693419774, 0.10016675001984403]
]
```
__Note__: hyperbolicCosine, hyperbolicTangent also exists.

## Authors

- **Nikhil Ashodariya** -(<https://github.com/NikhilAshodariya>)

## License

This project is licensed under the MIT License - see the

<license> file for details</license>
