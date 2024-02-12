/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// loop through the string
// declear an empty object
// check if each property is present in the object. 



function duplicateCount(text: string){
    const string = text.toLowerCase()
    let word = {}
    for (const str of string) {
        word[str] =  word.hasOwnProperty(str) ? word[str] + 1: 1 
    }

    let count = 0;
    for (const wor in word) {
        if(word[wor] > 1) {
            count++
        }
    }
    return count
}

console.log(duplicateCount('abideen'))
console.log(duplicateCount('Indivisibilities'))
