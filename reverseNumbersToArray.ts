//Given a random non-negative number, you have to return the digits of this number 		within an array in reverse order.

// receive positive integers

function digitize(n:number) { // receive the number
    let number = n.toString() // change  the received number to string
    .split('') //split the string gotten into array with string of numbers
    .reverse() // reverse the string of numbers
    .map( nums => Number(nums) ); // change each string of number into an integer (array)
    
    return number //return the array
  }
  
  
  
  
//   Examples
  digitize(348597) // [7,9,5,8,4,3]
  digitize(0) // [0]
  digitize(12345)
  