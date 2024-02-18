//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str: string, ending: string){
    // TODO: complete
    return str.endsWith(ending)
  }
  
  console.log(solution('abc', 'bc'))
  console.log(solution('abc', 'd'))
  console.log(solution('sumo', 'omo'))