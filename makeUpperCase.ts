//Change the letters of a string to uppercase
//split the string
//run a map function
//add toUppercase to each item
//Join each item back
const makeUpperCase = (str: string) =>
  str
    .split("")
    .map((item) => item.toUpperCase())
    .join("");

console.log(makeUpperCase("abideen"));
