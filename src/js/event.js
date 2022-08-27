function vowel2index(str) {
  return str
    .split('')
    .map((char, i) =>
      ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase()) ? i + 1 : char
    )
    .join('');
}

console.log(vowel2index('this is my string')); // 'th3s 6s my str15ng'
console.log(vowel2index('Codewars is the best site in the world')); // 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
console.log(vowel2index('Tomorrow is going to be raining')); // 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng'
console.log(vowel2index('')); // ''
