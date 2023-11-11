function longest(s1, s2) {
  const array = [];
  let s3 = s1 + s2;
  s3.split("")
    .sort()
    .filter((letter) => {
      if (!array.includes(letter)) {
        array.push(letter);
      }
    });

  return array.join("");
}
