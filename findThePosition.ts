// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle, so:

// Function takes an array of containing the word 'needle'
// return "found the needle at position + index"

function findNeedle(haystack: string[]) {
    // your code here
    if (haystack.includes('needle')) // check if its true
    return `found the needle at position ${haystack.indexOf('needle')}`
  }
  
  
  //Example
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])