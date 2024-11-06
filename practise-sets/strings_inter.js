const sentence = "The quick brown fox jumps over the lazy dog. ";
const word = "fox2";
console.log(sentence.includes(word));
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);

console.log(word.toUpperCase());
console.log(word.toLowerCase());
