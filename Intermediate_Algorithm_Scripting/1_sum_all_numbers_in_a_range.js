function sumAll(arr) {
  arr.sort( (a,b) => {
    return a===b ? 0 : a>b ? 1 : -1; 
  });
  let total = 0;
  for (let i=arr[0]; i<=arr[1]; i++) {
    total += i;
  }
  return total;
}

sumAll([1, 4]);