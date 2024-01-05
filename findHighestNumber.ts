
const numbers = [1, 2, 3, 4, 6, 9, 50, 7, 10]

const max =  (numbers: number[]) => {
    // declear a result to store an initial result
    let result = 0
    // lop throught the array of numbers
    for (const number of numbers) {
        /* 
            compare each value of the array to the value of the result
            if the value of the array is greater than that of the result:
                set the value of the value of the array as that of the result

            else if the value of the array is not greater, then retain the value of the result 

        */
        if ( number > result) {
            result = number
        } else {
            result = result
        }
    }
        
    // then return the result
    return {result}
}

max(numbers)