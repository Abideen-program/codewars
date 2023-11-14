//take an array
//return the words in the array as sentence

function smash (words: string[]) {
	let sentence = '';
  	for (let i = 0; i < words.length; i++){
      	sentence += words[i]
      	if (i !== words.length-1){
          sentence += ' '
        }
    }
  return sentence
};

smash(['hello', 'world', 'this', 'is', 'great'])  //'hello world this is great'

// OR


function sentence (words: string[]) {
	return words.join(' ')
};

sentence(['hello', 'world', 'this', 'is', 'great'])  //'hello world this is great'
