function twoHighest(arr) {
  return [...new Set(arr.sort((a, b) => b - a))].slice(0, 2);
}

console.log(twoHighest([])); // []
console.log(twoHighest([15])); // [15]
console.log(twoHighest([15, 20, 20, 17])); // [20, 17]
