/*
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
*/

function findDifference(a, b) {
  /* 
    let one = 1;
  let two = 1;

  for (let i = 0; i < a.length; i++) {
    one *= a[i];
  }

  for (let i = 0; i < b.length; i++) {
    two *= b[i];
  }

  let difference = one - two;
  if (difference < 1) {
    difference *= -1;
  } else {
    difference = difference;
  }
  */
  return Math.abs((a.reduce((previous, current) => previous * current, 1)) - (b.reduce((previous, current) => previous * current, 1)))
}

console.log(findDifference([2, 2, 3], [5, 4, 1]));
