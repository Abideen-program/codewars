class SmallestIntegerFinder {
    findSmallestInt(args) {
            let sorting = args.sort((a, b) => a - b) //Sort the array
          return sorting[0] //return array at index 0
    }
  }
  
  ma = new SmallestIntegerFinder()
  ma.findSmallestInt([34, 15, 88, 2])
  ma.findSmallestInt([34, -345, -1, 100])
  
  //OR
  
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }
  