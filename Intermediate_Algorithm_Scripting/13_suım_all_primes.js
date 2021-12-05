function sumPrimes(num) {
  if (num<2) return 0;
  let total = 0;
  for (let i=2; i <= num; i++ )
  {
    if (i.isPrime())
      total += i;
  }
  return total;
}

Number.prototype.isPrime = function () {
  if ( this < 2) return false;
  if  (this == 2 ) return true;
  for (let i=2 ; i<this; i++) {
    if (this % i==0)
      return false;
  }
  return true;
}

sumPrimes(10);