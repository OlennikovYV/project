let array2x2 = [
    [1, 2],
    [3, 4],
];

let array3x3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let array4x4 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

let array5x5 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
];

snail = function(array) {
    let tempArray = [];
    let snailArray = [];

    while (array != []) {

        tempArray = array.shift();
        if (!tempArray) break;
        tempArray.map(el => snailArray.push(el));

        array.map(el => snailArray.push(el.pop()));

        tempArray = array.pop();
        if (!tempArray) break;
        tempArray.reverse().map(el => snailArray.push(el));

        if (!array) break;
        array.reverse().map(el => snailArray.push(el.shift()));
        array.reverse();
    }

    return snailArray;
}

console.log(snail([
    []
])); // []
console.log(snail([
    [1]
])); // [1]
console.log(snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
])); // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
console.log(snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11]
])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]