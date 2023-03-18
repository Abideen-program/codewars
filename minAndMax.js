function minMax(arr){
    //find the minimum value
    minValue = Math.min(...arr)
    //find the maximum value
    maxValue = Math.max(...arr)
    return [minValue,maxValue]; // fix me!
  }
  
  console.log(minMax([1,2,3,4,5]))
  console.log(minMax([1]))