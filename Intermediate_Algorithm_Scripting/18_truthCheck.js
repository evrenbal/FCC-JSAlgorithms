function truthCheck(collection, pre) {
  /* Skip ES5 solution
  return collection.every( (item) => {
    return item.hasOwnProperty(pre) &&
        item[pre];
  });
  */

  for (let i in collection) {
    if ( !collection[i].hasOwnProperty(pre) ||
        !collection[i][pre])
        return false;
  }
  return true;


}

truthCheck(
  [
    {"user": "Tinky-Winky", "sex": "male"},
    {"user": "Dipsy", "sex": "male"},
    {"user": "Laa-Laa", "sex": "female"},
    {"user": "Po", "sex": "female"}
  ]
  , "sex"
);