// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let num = x.split('')
  for(let i = 0; i < num.length; i++){
    if (num[i] < 5) {
      num[i] = 0;
    } else{
      num[i] = 1
    }
  }
  return num.join('')
}

function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// Example
fakeBin('538243837')