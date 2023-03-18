function deleteNth(arr, n) {
  //declear an empty object
  let object = {};
  //return filter through the array, and populate the empty object
  return arr.filter((number) => {
    //check if the number of of occurence of each number in the object
    object[number] = object[number] ? object[number] + 1 : 1;
    //return number that 
    return object[number] <= n;
  });
}

console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))