// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// function takes only positive integers.
// return the same number in a descending form;
// Input: 12345 => 54321

function descendingOrder(n){
    let number = n.toString() //change number to string
    return Number(
        number.split('') // split to numbers into individual numbers in an array
        .sort((a, b) => b - a) // sort the number from heighest to lowest
        .join('') // join the numbers together to string
    ) //change string to Number
}

// Examples:
console.log(descendingOrder(12345))
descendingOrder(42145) // 54421
descendingOrder(145263) // 654321
descendingOrder(123456789) // 987654321

