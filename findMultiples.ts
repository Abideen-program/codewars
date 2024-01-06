function countBy(x:number, n:number) {
    let z: number[] = [];
        while(n > 0){
        z.push(x * n)
        n--;
      }	
    return z.sort((a, b) => a - b);
  }
  // Example
  countBy(1,10) // [1,2,3,4,5,6,7,8,9,10]
  countBy(2,5) // [2,4,6,8,10]
  
  
  