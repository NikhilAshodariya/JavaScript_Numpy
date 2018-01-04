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

## Basics

### Array Creation

```javascript
> var a = nj.fillWithNumber([2,3,4],5);
> a
[
  [
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5]
  ],
  [
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5]
  ]
]
```

**Note**: The fillWithNumber take two parameter the first parameter is the dimension of the required matrix in the above example the function creates a 3D matrix with three rows and four columns it is similar to Numpy function of Python. The default parameter to fill in array is zero. Here number 5 is used to fill the array.

```javascript
> var dim = nj.get_Dimensions(a);
> dim
[2,3,4]
```

**NOTE**: The function get_Dimensions returns the dimension of the given matrix.

```javascript
> var totalNumber = 10;
> var minRange = 3;
> var maxRange = 25;
> var ans = nj.generateRandomNumbers(totalNumber,minRange,maxRange);
> ans
[ 10, 20, 19, 14, 12, 18, 23, 25, 6, 22 ]
```

**Note**: The function generateRandomNumbers provides a list of random numbers generated with the minRange and maxRange the default parameter value for minRange is zero and maxRange is totalNumber

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

**Note** : In `reshape` function the first parameter is the data and the second parameter is the new dimension to which the data needs to be reshaped. The function `flatten` converts the matrix into a single Array.

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

> var ans = nj.multiply(a,c);
> ans
[
  [1, 2, 3],
  [8, 10, 12],
  [21, 24, 27],
  [20, 8, 4]
]
```

**Note** : The function `multiply` is not a matrix multiply instead it multiplies element by element. The `add` and `subtract` functions provides functionality similar to Numpy of Python

### Matrix Multiplication
```js
> var a = [
  [47, 10, 84, 64],
  [33, 19, 98, 25],
];

> var b = [
  [93, 85],
  [66, 91],
  [95, 77],
  [84, 30]
];

> var ans = nj.matrixMultiply(a,b);
ans
[
  [18387, 13293],
  [15733, 12830]
]

```
The `matrixMultiply` function multiplies the given matrix according to the matrix multiplication rules.

```js
> var a = [
  [
    [83, 41, 41, 27],
    [66, 63, 51, 15],
    [10, 39, 59, 44],
    [47, 4, 15, 97]
  ],

  [
    [93, 50, 70, 33],
    [32, 22, 27, 67],
    [66, 98, 69, 81],
    [80, 64, 1, 95]
  ]
];

> var b = [
  [67, 52, 43, 68],
  [81, 4, 83, 97],
  [86, 27, 94, 12],
  [85, 81, 17, 61]
];

> var ans = nj.matrixMultiply(a,b);
ans
[
  [
    [14703, 7774, 11285, 11760],
    [15186, 6276, 13116, 12126],
    [12643, 5833, 9961, 7855],
    [13008, 10722, 5412, 9681]
  ],
  [
    [19106, 9599, 15290, 14027],
    [11943, 7908, 6879, 8721],
    [25179, 12248, 18835, 19763],
    [18705, 12138, 10461, 17455]
  ]
]
```
__NOTE__: The `matrixMultiply` function can multiply ndArray with the given matrix of ndArray if the shape of both the matrix are compatible else it generates an error.

## Logarithm

The library supports three logarithmic functions first log10, logE, log.

```javascript
> var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [5, 2, 1]
];

> var ans = nj.log10(a);
> ans
[
  [0, 0.30103, 0.47712125],
  [0.60205999, 0.69897, 0.77815125],
  [0.84509804, 0.90308999, 0.95424251],
  [0.69897, 0.30103, 0]
]
```

**Note** : The log10 function finds the log to the base 10 of the given nd-Array or of a Number

```javascript
> var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [5, 2, 1]
];

> var ans = nj.logE(a);
> ans
[
  [0, 0.69314718, 1.09861229],
  [1.38629436, 1.60943791, 1.79175947],
  [1.94591015, 2.07944154, 2.19722458],
  [1.60943791, 0.69314718, 0]
]
```

**Note** : The logE function finds the log to the base e of the given nd-Array or of a Number.

### Log to the base n

```javascript
> var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [5, 2, 1]
];
> var ans = nj.log(a,7);
[
  [0, 0.35620719, 0.56457503],
  [0.71241437, 0.82708748, 0.92078222],
  [1, 1.06862156, 1.12915007],
  [0.82708748, 0.35620719, 0]
]
```

**NOTE**: The function declaration is `nj.log(exponent, base)`. In the above example we calculate the log of matrix a with base seven(7).

```javascript
> var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [5, 2, 1]
];

> var c = [
  [10],
  [20],
  [30],
  [40]
];

> var ans = nj.log(a,c);
ans
[
  [0, 0.30103, 0.47712125],
  [0.46275643, 0.53724357, 0.598104],
  [0.57212503, 0.61138514, 0.64601501],
  [0.43629453, 0.18790182, 0]
]
```

**NOTE**: In the above above example log is calculate for matrix a with base c. In the above operation log of first row of matrix a is calculate with base 10 i.e. [log10(1), log10(2), log10(3)], log of second row of matrix a is calculate with base 20 i.e. [log20(4), log20(5), log20(6)] and so on.

**NOTE**: The library is written in such a way that in above example nj.log(a,c) is not equal to nj.log(c,a);

```javascript
> var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [5, 2, 1]
];

> var c = [
  [10],
  [20],
  [30],
  [40]
];

> var ans = nj.log(c,a);
ans
[
  [Infinity, 3.32192809, 2.09590327],
  [2.16096405, 1.86135312, 1.67195002],
  [1.7478697, 1.6356302, 1.54795164],
  [2.29202967, 5.32192809, Infinity]
]
```

**NOTE**: In the above example we have taken nj.log(c,a) that means in the above operation log of first row of matrix c is calculated with bases [1, 2, 3] i.e. the first row of the answer is [log1(10), log2(10), log3(10)] i.e log of ten with base one, log of ten with base two, and log of ten with base three. For the second row bases are [4, 5, 6] i.e. the second row of the anser is [log4(20), log5(20), log6(20)] i.e. log of twenty with base four, log of twenty with base five, and log of twenty with base six. For the rest rows the process remains same.

**NOTE**: The log function provides great flexibility if needed.

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
```

**NOTE**: The `negative` function calculates the negative of each element of the given Matrix.

```javascript
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

**NOTE**: The abs function finds the absolute value of the given matrix.

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
```

The `mean` function calculates the mean of the matrix provided.

```javascript
> ans = nj.square(a);
> ans
[
  [1, 4, 9],
  [16, 25, 36],
  [49, 64, 81],
  [25, 4, 1]
]
```

**NOTE**: `square` function calculates the square of each element of the given matrix.

```javascript
> ans = nj.sum(a);
> ans
53
```

The `sum` function returns the sum of all the elements of the matrix.

```javascript
> ans = nj.totalElements(a);
> ans
12
```

The `totalElements` function returns the total number of elements in the given Matrix.

```javascript
> ans = nj.findHighestElement(a);
> ans
9
```

The `findHighestElement` function returns the highest value of the matrix provided.

```javascript
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

> ans = nj.power(3,a);
> ans
[
  [3, 9, 27],
  [81, 243, 729],
  [2187, 6561, 19683],
  [243, 9, 3]
]
```

**NOTE**: The `power` function returns the cube of element of the matrix a. `nj.power(3,a)` gives a different result it calculates three to the power of first row of matrix a in the above example it calculates 3^1, 3^2, 3^3 for the first row for second row it calculates the three to the power of second row of matrix a in the above example it calculates 3^4, 3^5, 3^6 and so on.

```javascript

> ans = nj.exp(a);
> ans
[
  [2.71828, 7.3890461584, 20.085496391455553],
  [54.5980031309658, 148.41265995084171, 403.42716529117405],
  [1096.6279948676927, 2980.9419458889515, 8103.034872671019],
  [148.41265995084171, 7.3890461584, 2.71828]
]
```

**NOTE**: The `exp` function calculates e^a i.e it calculates e raise to the power of each element of matrix a.

## Matrix Operations

```javascript
> var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [5, 2, 1]
];

> var ans = nj.transpose(a);
> ans
[
  [1, 4, 7, 5],
  [2, 5, 8, 2],
  [3, 6, 9, 1]
]
```

**NOTE** : The transpose function also works for higher dimensions. The transpose function is very much similar to Numpy transpose of Python.

### Find Matrix Inverse

```javascript
> var a = [
  [3, 5, 2],
  [2, 4, -2],
  [7, 1, 1]
];

> var ans = nj.matrixInverse(a);
ans
[
  [-0.05263157894736842, 0.02631578947368421, 0.15789473684210525],
  [0.14035087719298245, 0.09649122807017543, -0.08771929824561403],
  [0.22807017543859648, -0.2807017543859649, -0.017543859649122806]
]
```

**NOTE**: The `matrixInverse` function finds the inverse of the given ndArray. It generates an error if the determinant of the given matrix is zero.

### Find Determinant

```javascript
> var a = [
  [10, 32, 34],
  [54, 50, 26],
  [17, 83, 91]
];
> var ans = nj.findDeterminant(a);
> ans
4304
```

**NOTE**: The `findDeterminant` function finds the Determinant of the given Matrix.

```javascript

> var b =[
  [34, 59, 51, 63, 69],
  [60, 61, 21, 60, 32],
  [51, 43, 45, 7, 50],
  [42, 90, 46, 86, 9],
  [83, 6, 87, 60, 35]
];

> var ans = nj.findDeterminant(b);
> ans
-979886677
```

**NOTE**: The `findDeterminant` function works for N*N dimension matrix.

```javascript
> var a = [
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
> var ans = nj.findDeterminant(a);
> ans
[ -1824, -2924, -2520 ]
```

```javascript
> var a = [
  [
    [
      [67, 71],
      [22, 75]
    ],

    [
      [97, 77],
      [54, 32]
    ],

    [
      [91, 50],
      [79, 51]
    ]
  ],


  [
    [
      [84, 85],
      [88, 99]
    ],

    [
      [33, 58],
      [51, 50]
    ],

    [
      [30, 8],
      [15, 89]
    ]
  ]
];

> var ans = nj.findDeterminant(a);
> ans
[
  [3463, -1054, 691],
  [836, -1308, 2550]
]
```

**NOTE** : `findDeterminant` function retains the shape of Matrix since the matrix's outer shape was of (2,3) so the ans of `findDeterminant` is also (2,3).

#### Generating Identity Matrix

```javascript
> var dim = [4, 4];
> var ans = nj.generateIdentityMatrix(dim);
ans
[
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]
]
```

**NOTE**: `generateIdentityMatrix` function generates an Identity matrix of the given dimension. The function also checks if the dimension given is square. The function can generate an ndArray.

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

**NOTE**: `nj.sin(a)` calculates the sin of the angles provided in matrix a. The angle are assumed to be in degree.

**Note**: `nj.sin(a,"radian")` takes matrix a as the matrix of angle in radian. nj.cos, nj.tan also exists.

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

**Note**: hyperbolicCosine, hyperbolicTangent also exists.

## Authors

- **Nikhil Ashodariya** -(<https://github.com/NikhilAshodariya>)

## License

This project is licensed under the [MIT License](LICENSE)
