// Calculate max character in the string
const maxChar = (str) => {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    // console.log(charMap[char]);
    if (charMap[char] > max) {
      max = charMap[char]; // Store obj value
      maxChar = char; // store obj key
    }
  }
  return maxChar;
};

console.log(maxChar("Hello There!"));
