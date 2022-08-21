function wordsToMarks(string) {
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  return [...string].reduce((sum, char) => sum + alphabet[char], 0);
}

console.log(wordsToMarks('attitude')); // 100
console.log(wordsToMarks('friends')); // 75
console.log(wordsToMarks('family')); // 66
console.log(wordsToMarks('selfness')); // 99
console.log(wordsToMarks('knowledge')); // 96
