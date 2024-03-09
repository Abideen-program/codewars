function getCount(str: any) {
    let vowelsCount = 0;

          str.toLowerCase() //convert string to lowercase
          .split('')
          .forEach( vowel => { // loop through each array and check if they contains 'a,e,i,o,u'
            if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
                vowelsCount++; // increase the vowel count
          }
      })
    return vowelsCount;
  }
  getCount('abracadabra')
  getCount('Olafimihan')
  getCount('ABIDEEN OLAFIMIMIHAN')
  
  