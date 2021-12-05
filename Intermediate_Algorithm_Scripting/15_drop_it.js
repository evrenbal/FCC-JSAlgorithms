function dropElements(arr, func) {
  let newArr = [...arr];
  while ( arr.length > 0 && !func(newArr[0]) )
  {
    newArr.shift();
  }
  return newArr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });