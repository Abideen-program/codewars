//CHECKING THE FREQUENCY OF THE LETTERS IN A WORD

const howManyTimes = (phrase: string) => {
  //create an empty object
  const frequency = {};
  // loop through the phrase
  for (const letter of phrase) {
    /* 
            check if the letter is present in the object created
            
            if the letter is present in the frquency
                set the value of the letter to (intial value + 1)
            else ( set the value of the new letter to 1)
        */

    if (letter in frequency) {
      frequency[letter] = frequency[letter] + 1;
    } else {
      frequency[letter] = 1;
    }
  }

  return frequency;
};

howManyTimes("haha");


//CHECKING THE FREQUENCY OF THE LETTERS IN A WORD 

const senten = "lol tonight lol";

const wordFrequency = (sentences: any) => {

    // Call the split method on the setence to change to an array
    const words = sentences.split(" ");
    // Pass the array into the function
    return howManyTimes(words);
};

wordFrequency(senten);

