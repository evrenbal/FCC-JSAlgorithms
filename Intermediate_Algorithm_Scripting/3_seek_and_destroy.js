function destroyer(arr, ...arg) {
  return arr.filter( (val) => {
    return arg.indexOf(val) === -1 ;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);