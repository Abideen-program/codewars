//In RNA Thymine is replaced by another nucleic acid Uracil ('U'). Create a function which translates a given DNA string into RNA.

// Write a function that is going to change the T in DNA to U in RNA
//Accept DNA sequence
//Return RNA sequence



function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let DNA = dna.split('T').join('U') //split the string at T and join together with U
    return DNA
  }
  
  //For example:
  DNAtoRNA("GATCAGTCC")
  DNAtoRNA("GCAT") //"GCAU"
  DNAtoRNA("TTTT") //"uuuu"
  