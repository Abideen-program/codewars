/*count the number of character in a string 
if its an empty string return empty object literal {}
*/
function count(string) {
  //declear an empty object
  let object = {};
  //convert the string to an array
  let stringArray = string.split("");
  //check if the length of the array is greater than zero
  if (stringArray.length > 0) {
    //map through the array
    stringArray.map((letter) => {
      //return data of the object by checking for the number of occurence if each value of array
      return (object[letter] = object[letter] ? object[letter] + 1 : 1);
    });
  } // else return empty object literal {}
  return object;
}
console.log(count("abca"));
console.log(count(""));
