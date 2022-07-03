
const howManyTimes = (phrase) => {
    //create an empty object
    const frequency = { }
    // loop through the phrase 
    for (const letter of phrase) {
        /* 
            check if the letter is present in the object created
            
            if the letter is present in the frquency
                set the value of the letter to (intial value + 1)
            else ( set the value of the new letter to 1)
        */

        if ( letter in frequency) {
            frequency[letter] = frequency[letter] + 1
        } else {
            frequency[letter] = 1
        }
    }

    return frequency
}

howManyTimes('haha')