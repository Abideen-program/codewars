function minMax(arr: number[]) {
  //find the minimum value
  const minValue = Math.min(...arr);
  //find the maximum value
  const maxValue = Math.max(...arr);
  return [minValue, maxValue]; // fix me!
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([1]));
