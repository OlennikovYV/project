Array.prototype.even = function () {
  return this.filter(el => Number.isInteger(el)).filter(
    number => number % 2 === 0
  );
};

Array.prototype.odd = function () {
  return this.filter(el => Number.isInteger(el)).filter(
    number => number % 2 !== 0
  );
};

Array.prototype.under = function (x) {
  return this.filter(el => Number.isInteger(el)).filter(number => number < x);
};

Array.prototype.over = function (x) {
  return this.filter(el => Number.isInteger(el)).filter(number => number > x);
};

Array.prototype.inRange = function (min, max) {
  return this.filter(el => Number.isInteger(el)).filter(
    number => number >= min && number <= max
  );
};

console.log([1, 2, 3, 4, 5].even());
// [2, 4]);
console.log([1, 2, 3, 4, 5].odd());
// [1, 3, 5]);
console.log([1, 2, 3, 4, 5].under(4));
// [1, 2, 3]);
console.log([1, 2, 3, 4, 5].over(4));
// [5]);
console.log([1, 2, 3, 4, 5].inRange(1, 3));
// [1, 2, 3]);

console.log([1, 2, 18, 19, 20, 21, 22, 30, 40, 50, 100].even().inRange(18, 30));
// [18, 20, 22, 30]
console.log(['a', 1, 'b', 300, 'x', 'q', 63, 122, 181, 'z', 0.83, 0.11].even());
// [300, 122]
