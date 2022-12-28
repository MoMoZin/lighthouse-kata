const numberOfVowels = function (data) {
  // Put your solution here
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let d of data) {
    if (vowels.includes(d))
      count++;
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
