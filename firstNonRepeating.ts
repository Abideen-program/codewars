const firstNonRepeatingLetter = (s: string) => {
  let str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
};

console.log(firstNonRepeatingLetter("Stress"));
