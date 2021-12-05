Array.prototype.diff = function(arr) {
  let newArray = [];
  this.map( (val) => {
    if (arr.indexOf(val) === -1)
      newArray.push(val)
  });
  return newArray;
}

function diffArray(arr1, arr2) {
  return arr1.diff(arr2)
    .concat(arr2.diff(arr1));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);