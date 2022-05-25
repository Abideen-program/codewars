// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// function receives a string parameter.
// function reverses each word in the string with space retained,


function reverseWords(str){
    // Go for it
    return str.split(' ').map( item => item.split('').reverse().join('')).join(' ');
}
  

//Examples
reverseWords("This is an example!");
reverseWords('The quick brown fox jumps over the lazy dog.');