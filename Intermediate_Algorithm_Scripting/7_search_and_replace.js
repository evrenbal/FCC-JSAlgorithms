function myReplace(str, before, after) {
  //Set the first letter capitalization of after based on before
  after = (
    /^[A-Z]/.test(before)
    ? after[0].toUpperCase()
    : after[0].toLowerCase()
    ) + after.substring(1);
    return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");