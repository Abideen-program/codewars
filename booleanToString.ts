// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b: boolean){
    return (b === true) ? "true" : "false";
}

// OR

function booleanToStrings(b: boolean){
    return b.toString();
}

booleanToString(true);
booleanToString(false);