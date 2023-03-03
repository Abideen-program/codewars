// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    //split the string into array of letters
    const splitString = string.split('')
    //map the letter to find the letter that is a capital letter
    const upper = splitString.map((str) => {
      if (str.toUpperCase() === str) {
        // add space to the back of the uppercase letter
        str = ' ' + str
      }
      return str
    })
    //join the array of letters together using space at the back of the uppercase letter
    return upper.join('')
  }
  
  console.log(solution('camelCasing'))
  console.log(solution('myName'))