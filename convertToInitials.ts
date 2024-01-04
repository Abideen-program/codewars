//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.The output should be two capital letters with a dot separating them.It should look like this:

function abbrevName(name: string){
	let initials = name.toUpperCase() // covert name to upper case
    .split(' '); // split name into array of two length
  return initials[0][0] + '.' + initials[1][0] //joined the first lettr of the first index with that of second index with . join('.')
}

//Examples
abbrevName('Sam Harris')
abbrevName('partrick feeney')

// OR

// function abbrevName(name: string){
//     return (name.toUpperCase().split(' ').map( init => init[0]).join('.'))
// }

// abbrevName('Sam Harris')
// abbrevName('partrick feeney')

