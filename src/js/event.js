function squares(x, n) {
  let result = [];

  if (n <= 0) return result;

  for (let i = 0; i < n; i += 1) {
    result.push(x);
    x *= x;
  }

  return result;
}

console.log(squares(2, 5)); // [2,4,16,256,65536]
console.log(squares(3, 3)); // [3,9,81]
console.log(squares(5, 3)); // [5,25,625]
console.log(squares(10, 4)); // [10,100,10000,100000000]

console.log(squares(2, 0)); // []
console.log(squares(2, -5)); // []
