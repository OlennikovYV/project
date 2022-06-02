function enough(cap, on, wait) {
  return Math.max(0, wait + on - cap);
}

console.log(enough(10, 5, 5)); // 0
console.log(enough(100, 60, 50)); // 10
console.log(enough(20, 5, 5)); // 0
