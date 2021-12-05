function steamrollArray(arr) {
  /* without using Array.flat() */
  let flatArr = [];
  for (let x in arr) {
    if (Array.isArray(arr[x]))
    {
     steamrollArray(arr[x]).forEach( (val) => {
       flatArr.push(val);
     });
    } else {
      flatArr.push(arr[x]);
    }
  }
  return flatArr;
 }
 
 steamrollArray([1, [2], [3, [[4]]]]);