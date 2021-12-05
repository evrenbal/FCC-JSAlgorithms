function addTogether(...args) {
  let x = args[0];
  let y = args[1];
  if (typeof(x) != "number")
    return undefined;
  return args.length == 0 
    ? undefined
    : args.length > 1
      ? ( typeof(y) == "number" 
          ? x+y
          : undefined 
        )
      : function(y) {
        return typeof(y) == "number" ? x+y : undefined;
  }
}

addTogether(2,3);