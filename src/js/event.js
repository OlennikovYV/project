function productArray(numbers) {
  return numbers.map((_, i) =>
    numbers
      .slice(0, i)
      .concat(numbers.slice(i + 1))
      .reduce((mul, digit) => mul * digit, 1)
  );
}

console.log(productArray([12, 20])); // [20, 12]
console.log(productArray([12, 20])); // [20, 12]
console.log(productArray([3, 27, 4, 2])); // [216, 24, 162, 324]
console.log(productArray([13, 10, 5, 2, 9])); // [900, 1170, 2340, 5850, 1300]
console.log(productArray([16, 17, 4, 3, 5, 2])); // [2040, 1920, 8160, 10880, 6528, 16320]
