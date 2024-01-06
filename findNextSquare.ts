function findNextSquare(sq:number) {
    // Return the next square if sq is a perfect square, -1 otherwise
    const number = Math.sqrt(sq) // find the square root of the input value
    if(Number.isInteger(number)) { //check if the number does not have decimal
      return (number + 1)*(number + 1) //then return the square of the number
    }
    return -1;
  }