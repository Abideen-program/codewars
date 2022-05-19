// Build a function that returns an array of integers from n to 1 where n>0.

// Function will receive a positive interger n = 5
// returns an array [5, 4, 3, 2, 1]
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let array = []; // set an empty array
    while (n > 0){ // if the number is greater than zero,
      array.push(n); // push it to the empty array
      n--; // reduce the number by one and do the push again
    }
    return array;
  };
  
  console.log(reverseSeq(5))
  