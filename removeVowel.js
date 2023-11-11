function disemvowel(string) {
  const vowels = "aieou";

  return string
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("");
}
