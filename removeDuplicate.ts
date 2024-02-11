function longest(s1: string, s2: string) {
  const array: string[] = [];
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
