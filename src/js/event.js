function mostFrequentItemCount(collection) {
  let maxCount = 0;
  const countNumbers = collection.reduce((count, number) => {
    count[number] = (count[number] || 0) + 1;
    return count;
  }, {});

  for (let key in countNumbers) {
    if (countNumbers[key] > maxCount) maxCount = countNumbers[key];
  }

  return maxCount;
}

console.log(mostFrequentItemCount([3, -1, -1])); // 2
console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
);
// 5
