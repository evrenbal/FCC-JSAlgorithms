function sumFibs(num) {
  /*
   * Solved with a while loop
   * A quicker but memory consuming solution can be:
   * Create an initial array [1,1], add fibonnaci numbers
   * less than num to the stack with an iteration.
   * Finally, calculate the sum usigin Array.reduce
   */
 
  if (num<=1) return 0;
  let prev = 1;
  let current = 1;
  let total = 1;

  while ( num >= current) {
    if (current%2 == 1) {
      total += current;
    }
    let next = prev + current;
    prev = current;
    current = next;
  }
  return total;
}

sumFibs(10);