function gooseFilter(birds: string[]) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  const array: string[] = [];

  for (let i = 0; i < birds.length; i++) {
    //loop through the birds array
    if (geese.indexOf(birds[i]) === -1) {
      //check if the bird are not present in the goose array
      array.push(birds[i]); //push them to the empty array if present
    }
  }

  return array;
}
