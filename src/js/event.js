function isDivisible(num, ...arg) {
  if (!arg) return true;

  return [...arg].every(el => num % el === 0);
}

console.log(isDivisible(3)); // true
console.log(isDivisible(3, 3, 4)); // false
console.log(isDivisible(12, 3, 4)); // true
console.log(isDivisible(8, 3, 4, 2, 5)); // false
