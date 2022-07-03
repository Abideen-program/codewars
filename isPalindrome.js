const isPalendrom =  (string) => {
    // covert the input string to a lowercase
    const stringLow = string.toLowerCase()
    const array = stringLow.split('') // convert stringLow to an array
                  .reverse() // reverse the result of the conversion
                  .join('') // join back together to form a string
    //compare the array with the stringLow
    if (stringLow === array ) {
      return true
    }
    return false
  }
  isPalendrom('racecar')