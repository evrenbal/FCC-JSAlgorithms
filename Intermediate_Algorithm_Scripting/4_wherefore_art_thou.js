function whatIsInAName(collection, source) {
  return collection.reduce( (result, curr) => {
    for (let key in source) {
      if ( !curr.hasOwnProperty(key) || source[key]!=curr[key] )
        return result;
    }
    result.push(curr);
    return result;
  }, [] );
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });