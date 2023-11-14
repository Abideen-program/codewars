const alphabetPosition = (text: string) => {
  //write out the alphabets
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  //change the string of alphabets into arrays
  let alphabetArray = alphabets.split("");
  //change the input text into an array
  let textArray = text.toLowerCase().split("");
  return textArray
    .filter((letter) => {
      return alphabetArray.includes(letter); //check for the members that are empty spaces don't include them
    })
    .map((letter) => { //check the index of the returned array and add 1 to each
      return alphabetArray.indexOf(letter) + 1; 
    });
};

console.log(alphabetPosition("abcdh"));
