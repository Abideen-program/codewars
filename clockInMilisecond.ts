// Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s){
    let milisecond = 0; //set milisecond = 0;
    
    milisecond += ((h * 3600)+(m * 60) + (s * 1)) * 1000; // add the values of h, m , s to milisecond
    
    return milisecond;
  }
  
  //Example
  past(0,1,1)
  past(1,0,1)