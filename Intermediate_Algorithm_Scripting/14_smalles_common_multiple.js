/*
 * Get All Prime Factors of an integer
 */
Number.prototype.getPrimeFactors = function () {
  const factors = {};
  let num = this;
  for (let pF = 2; pF <= num; pF++ ) {
      while ( num % pF === 0)
      {
        factors[pF] = factors[pF] ? factors[pF] + 1 : 1;
        num /= pF
      }
  }
  return factors;
}

function smallestCommons(arr) {
  const [min, max] = arr.sort( (a,b) => a-b  );
  let globalPrimeFactors = {};
  
  /* 
   * Find Prime Factors of every number in range,
   * Add all prime factors to the global prime factors object
   * If there are common factors, use the biggest one
   * ( as per Math formula )
   * Multiply all these prime factors to find the result
   */

  for (let i = min; i<=max ; i++) {
    let currentPrimeFactors = i.getPrimeFactors();
    for (let j in currentPrimeFactors) {
      globalPrimeFactors[j] = ( !globalPrimeFactors.hasOwnProperty(j)
        || globalPrimeFactors[j] < currentPrimeFactors[j] )
        ? currentPrimeFactors[j]
        : globalPrimeFactors[j]
    }
  }
  let smallestCommonMultiple = 1
  for (let x in globalPrimeFactors) {
    smallestCommonMultiple *= x**globalPrimeFactors[x];
  }
  return smallestCommonMultiple;
}

smallestCommons([1,5]);