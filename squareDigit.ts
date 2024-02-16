// square every digit of a number and concatenate them. For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Accepts integer 9 4

// returns integer	81	16

function squareDigits(num: number) {
  let number: string = ("" + num) // convert the number into string by adding ''
    .split("") //split the number separately
    .map((nums: any) => nums * nums) // map through each numbers and find the squares
    .join(""); // join the numbers together in string form
  return Number(number); //convert the resulted string back to number.
}
squareDigits(23);
squareDigits(9119);
// SquareDigits(9119) // 811181
// SquareDigits(3212) // 9414
