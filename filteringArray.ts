//Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends: string[]){
    return friends.filter( name => name.length === 4) //check for a string in the array with length of 4
}


// Example

friend(["Ryan", "Kieran", "Jason", "Yous"]) // ["Ryan", "Yous"]


friend (["Ryan", "Kieran", "Mark"]) // ["Ryan", "Mark"]
