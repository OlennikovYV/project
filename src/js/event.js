function shorter_reverse_longer(a, b) {
  if (a.length >= b.length) [a, b] = [b, a];
  return a + b.split('').reverse().join('') + a;
}

console.log(shorter_reverse_longer('first', 'abcde'));
// 'abcdetsrifabcde'
console.log(shorter_reverse_longer('hello', 'bau'));
// 'bauollehbau');
console.log(shorter_reverse_longer('fghi', 'abcde'));
// 'fghiedcbafghi'
